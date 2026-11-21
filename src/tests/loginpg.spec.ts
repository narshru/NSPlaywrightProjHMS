import { Page, Locator } from "@playwright/test";
import { credentials } from "../testdata/credentials";

test("login to the aplication" , async ({page})=>{
await func_navigateto url = ("https://automatetesting-platform.com/");
await login credentials = ("miaaviAdmin") , ("miaaviPassword")
})