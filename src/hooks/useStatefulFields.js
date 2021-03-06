import React, { useState } from "react";

export function useStatefulFields() {
    const [value, setValue] = useState({});

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
        console.log("value", value);
    };

    return [value, handleChange];
}
