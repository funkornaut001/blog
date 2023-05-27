import { defineConfig } from "sanity"; 
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "xnyow1kz",
    dataset: "production",
    title: "My Portfolio",
    apiVersion: "2021-03-25",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }

})

export default config;