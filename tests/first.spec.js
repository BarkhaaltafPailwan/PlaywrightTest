import test from "@playwright/test"


test("first test", async({page})=>
{
   await  page.goto("https://chatgpt.com/")
})


//Adding to git