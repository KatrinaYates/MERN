import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectsPath = join(__dirname, "..", "src", "data", "projects.json");

const raw = readFileSync(projectsPath, "utf8");
const data = JSON.parse(raw);

console.log("Projects data loaded from:", projectsPath);
console.log("");

if (data.intro) {
    console.log("Intro:");
    console.log(`  ${data.intro.eyebrow} — ${data.intro.title}`);
    console.log(`  ${data.intro.description}`);
    console.log("");
}

const items = data.items ?? [];
console.log(`${items.length} project(s):\n`);

items.forEach((project, index) => {
    console.log(`--- Project ${index + 1}: ${project.title} ---`);
    console.log(`  Category: ${project.category}`);
    console.log(`  Tools:    ${(project.tools ?? []).join(", ")}`);
    console.log(`  Image:    ${project.image}`);
    console.log(`  Description:\n    ${(project.description ?? "").replace(/\n/g, "\n    ")}`);
    console.log("");
});
