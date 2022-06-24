import React from "react";
import Counter from "../counter.js";
import {fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(()=>
{
    const component = render(<Counter/>);
    getByTestId = component.getByTestId;
    //getByTestId is scope within this function. Not accessible by other function
    //const {getByTestId} = render(<Counter/>);
});

describe("Interface check",()=>{
    test("header", ()=>{
        //const component = render(<Counter/>);
        //const headerEl = component.getByTestId("header");
        const headerEl = getByTestId("header");
        expect(headerEl.textContent).toBe("My Counter");
    });

    test("input contain 1", ()=>{
        const inputEl = getByTestId("input");
        expect(inputEl.value).toBe("1");
    });

    test("add button is +", ()=>{
        const addBtn = getByTestId("addBtn");
        expect(addBtn.textContent).toBe("+");
    });

    test("minus button is -", ()=>{
        const subBtn = getByTestId("subBtn");
        expect(subBtn.textContent).toBe("-");
    });
});

describe("user interaction",()=>{
    test("minus btn action",()=>{
        const countEl = getByTestId('counterEl');
        const subBtn = getByTestId("subBtn");
        expect(countEl.textContent).toBe("0");
        fireEvent.click(subBtn);
        expect(countEl.textContent).toBe("-1");
    });

    test("add btn action",()=>{
        const countEl = getByTestId('counterEl');
        const addBtn = getByTestId("addBtn");
        expect(countEl.textContent).toBe("0");
        fireEvent.click(addBtn);
        expect(countEl.textContent).toBe("1");
    });

    test("change input value",()=>{
        const inputEl = getByTestId('input');
        expect(inputEl.value).toBe("1");
        fireEvent.change(
            inputEl,{
                target:{value:7}
            }
        );
        expect(inputEl.value).toBe("7");
    });

    test("check extreme color change",()=>
    {
        const inputEl = getByTestId('input');
        const countEl = getByTestId('counterEl');
        const subBtn = getByTestId("subBtn");
        const addBtn = getByTestId("addBtn");

        expect(countEl.textContent).toBe("0");

        fireEvent.change(
            inputEl,{target:{value:100}}
        );
        fireEvent.click(addBtn);
        expect(countEl.className).toBe("big");

    
        fireEvent.change(
            inputEl,{target:{value:1}}
        );
        fireEvent.click(subBtn);
        expect(countEl.className).toBe("");
        
        fireEvent.change(
            inputEl,{target:{value:100}}
        );
        fireEvent.click(subBtn);
        expect(countEl.className).toBe("small");


    });
});