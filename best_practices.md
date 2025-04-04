<!-- ## Project best practices
- For change in each `{filename}.ts/tsx` file, PR has to contain change in `filename}.spec.ts/tsx` -->

#### Definition

My Own space best practices for unit test cases.

####  Decision

- Place test files in the same directory as the component or function they test.
- Use `component.spec.ts`  naming conventions
- PRs modifying files under `src/` should also include changes under same folder.
- Automated checks will block PRs that modify code without corresponding test updates.

