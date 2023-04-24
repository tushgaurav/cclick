import { db } from "./db";

export function createUser(firstName: string, lastName: string, email: string, password: string) {
  return db.user.create({
    data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
  })