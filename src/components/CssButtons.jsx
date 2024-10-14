import { Button, IconButton, LoadingButton } from "./CSSButton"; // Adjust the path as needed
function cssButton() {
  return (
    <div>
      <h1>Button Demo</h1>
      <Button variant="primary">Primary Button</Button>
      <Button variant="destructive" size="lg">
        Destructive Large Button
      </Button>
      <IconButton icon={() => <span>🏠</span>} variant="secondary" />
      <LoadingButton loading={true}>Loading Button</LoadingButton>
    </div>
  );
}

export default cssButton;
