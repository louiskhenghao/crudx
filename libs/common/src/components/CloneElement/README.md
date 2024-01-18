# CloneElement

Inject props to target component

## Props

```TypeScript
{
  [key: string]: any;
};
```

---

## Example

```TypeScript
// import from package
import { CloneElement } from "@crudx/common";

// example of component
const Button = (props) => {
  const :{ children, ...restProps } = props;
  return <button {...restProps}>{children}</button>
}

// usage
<CloneElement
  onClick={() => {
    console.log('do something')
  }}
>
  <Button>Testing</Button>
</CloneElement>,
```
