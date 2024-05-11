import { Message } from "@/model/User";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAceptingMessages?: boolean; //? for optional
  messages?: Array<Message>;
}
