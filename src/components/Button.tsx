import * as React from "react";
import { Component, ReactNode } from "react";
import "../App.css";

type Props = {
  onPressed?: React.MouseEventHandler<HTMLButtonElement>;
  highlighted?: boolean;
  children?: ReactNode;
};

class Button extends Component<Props> {
  public static defaultProps = {
    highlighted: false,
  };

  render(): ReactNode {
    return (
      <button
        className="Button"
        onClick={this.props.onPressed}
        style={{
          color:
            typeof this.props.onPressed == "undefined"
              ? "var(--disabled-color)"
              : this.props.highlighted
              ? "white"
              : "var(--primary-color)",
          backgroundColor: this.props.highlighted
            ? "var(--primary-color)"
            : undefined,
        }}
      >
        <div>{this.props.children}</div>
      </button>
    );
  }
}

export default Button;
