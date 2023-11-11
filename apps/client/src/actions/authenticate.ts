"use server";

export async function login(username:string,password:string){
  console.log(`login ${username} ${password}`);
  const loginSuccess = true;
  if(!loginSuccess){
    return null;
  }
  return true;
}