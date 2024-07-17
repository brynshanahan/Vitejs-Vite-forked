# issue repro for vitest

Run the below command to see the issue. Vite is able to import "react-focus-lock" at all times while vitest fails to import it the module when it is a nested dependency.

```
node show-issue.mjs
```
