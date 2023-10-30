import SearchQuery from "./types/search";

export type ErrorResponse = {
  status: string;
  message: string;
};
export type FeedbackListResponse = {
  status: string;
  data: Array<any> | any;
};

export type FeedbackResponse = {
  status: string;
};

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const message = isJson
      ? data.message || response.statusText
      : response.statusText;
    throw new Error(message);
  }

  return data as T;
}

export async function mainSearch(query: SearchQuery): Promise<Array<any>> {
  
  const response = await fetch(
    `/api/mortgage_search?${getQueryString(query)}`
  );

  return handleResponse<FeedbackListResponse>(response).then((data) => data.data);
}

export async function detailedInfo(id:string){
  const response=await fetch(`/api/detailed/${id}`)

  return handleResponse<FeedbackListResponse>(response).then((data) => data.data);
}
// Utility function to convert the query object to a query string
const getQueryString = (query: SearchQuery) =>
  Object.entries(query)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");



export async function apiDeleteFeedback(feedbackId: string): Promise<void> {
  const response = await fetch(
    `${SERVER_ENDPOINT}/api/feedbacks/${feedbackId}`,
    {
      method: "DELETE",
    }
  );

  if (response.status !== 204) {
    const errorResponse: ErrorResponse = await response.json();
    if (errorResponse) {
      throw new Error(errorResponse.message);
    } else {
      throw new Error(`API error: ${response.status}`);
    }
  }
}
