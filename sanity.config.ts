import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import schemas from "./sanity/schemas"

const config = defineConfig({
	projectId: "yatrgxqm",
	dataset: "production",
	title: "My Personal Portfolio 2023",
	apiversion: "2023-03-04",
	basePath: "/admin",
	plugins: [deskTool(), visionTool()],
	schema: { types: schemas },
})

export default config
