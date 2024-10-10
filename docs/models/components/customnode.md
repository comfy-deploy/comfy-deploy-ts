# CustomNode

## Example Usage

```typescript
import { CustomNode } from "comfydeploy/models/components";

let value: CustomNode = {
  url: "https://scary-creature.info",
  installType: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `pip`              | *string*[]         | :heavy_minus_sign: | N/A                |
| `url`              | *string*           | :heavy_check_mark: | N/A                |
| `hash`             | *string*           | :heavy_minus_sign: | N/A                |
| `installType`      | *string*           | :heavy_check_mark: | N/A                |
| `files`            | *string*[]         | :heavy_minus_sign: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |