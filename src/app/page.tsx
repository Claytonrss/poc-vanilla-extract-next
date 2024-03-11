import { themeClass } from "@/styles/theme.css";
import { Btn } from "@/components/Button";

export default function Home() {
  return (
    <div className={themeClass}>
      <Btn color="primary" size="large">Primary Button</Btn>
      <Btn color="secondary" size="small">Secondary Button</Btn>
    </div>
  );
}
