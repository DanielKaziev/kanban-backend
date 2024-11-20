import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { IResponseMessage } from "./types/common";

const PROTO_PATH = path.join(__dirname, "./proto/auth.proto"); // путь к вашему proto файлу
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const authProto = grpc.loadPackageDefinition(packageDefinition).auth as any;

const GRPC_HOST = process.env.KANBAN_GRPC_HOST || "localhost"
const GRPC_PORT = process.env.KANBAN_GRPC_PORT || "50051"

const client = new authProto.AuthService(
  `${GRPC_HOST}:${GRPC_PORT}`,
  grpc.credentials.createInsecure()
);

export function validateTokenPermission(
  token: string,
  permission: string
): Promise<IResponseMessage> {
  return new Promise((resolve, reject) => {
    client.ValidateTokenPermission(
      { token, permission },
      (error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      }
    );
  });
}

export function validateToken(token: string): Promise<IResponseMessage> {
  return new Promise((resolve, reject) => {
    client.ValidateToken({ token }, (error: any, response: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}
