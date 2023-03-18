import React from "react";
import { ToggleButton } from "react-bootstrap";

export default function ToggleDark(props) {
    return (
    <div>
        <div class="wrapper">
            
                <input
                    type="checkbox"
                    id="checkbox-toggle"
                    onClick={() => {
                        props.toggleDark();
                    }}
                />
            
        </div>
    </div>
    );
  }