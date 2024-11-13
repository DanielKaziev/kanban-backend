import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { IResponseMessage } from "./types/common";

const PROTO_PATH = path.join(__dirname, "./proto/auth.proto"); // путь к вашему proto файлу
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const authProto = grpc.loadPackageDefinition(packageDefinition).auth as any;

const client = new authProto.AuthService(
  "localhost:50051",
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
