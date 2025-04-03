[best_practices]
 organization_name = "Sindhuja Dubbaka"
 
# [React]

- Use semantic HTML elements (nav, header, main, footer, etc.)
- Include appropriate ARIA attributes for interactive elements
- Use design tokens/variables instead of hard-coded values
- Avoid XSS vulnerabilities by sanitizing user input
- Never use unsafe `eval()` or `innerHTML` without sanitization
- Validate user-generated content before rendering
- Check href attributes for potential javascript: protocol exploitation
- Follow Content Security Policy (CSP) best practices
- Handle authentication tokens securely
- Check for sensitive information not been present in *.spec.ts or *.test.ts files
- Follow atomic design principles (atoms, molecules, organisms, templates, pages)
- Keep components focused on a single responsibility
- Create reusable components for common UI patterns
- Use memoization appropriately with useMemo and useCallback
- Avoid unnecessary re-renders with proper dependency arrays
- Implement React.memo() for pure functional components
- Pass only required props to child components
- Optimize conditional rendering to prevent unnecessary DOM updates
- Use lazy loading for components not needed on initial render
- Implement proper error boundaries
- Create well-documented custom hooks for reusable logic
