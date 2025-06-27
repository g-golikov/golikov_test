const required = 22;
const current = parseInt(process.versions.node, 10);

if (current < required) {
  console.error(
    `❌ Error: Node.js ${required} or higher is required. Current version: ${process.versions.node}`
  );
  process.exit(1);
}
