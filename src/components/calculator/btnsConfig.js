const action_btns = {
  THEME: "THEME",
  ADD: "ADD",
  CALC: "CALC",
  DELETE: "DELETE",
  CLEAR: "CLEAR",
};

const btns = [
  {
    display: "c",
    action: action_btns.CLEAR,
    class: "btn-operation",
  },
  {
    display:'(',
    action: action_btns.ADD,
    class: "btn-operation",
  },
  {
    display:')',
    action: action_btns.ADD,
    class: "btn-operation",
  },
  {
    display: "/",
    action: action_btns.ADD,
    class: "btn-operation",
  },
  
  {
    display: "7",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: "8",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: "9",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: "x",
    action: action_btns.ADD,
    class: "btn-operation",
  },
  
  {
    display: "4",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: "5",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: "6",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: "+",
    action: action_btns.ADD,
    class: "btn-operation",
  },
  
  {
    display: "1",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: "2",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: "3",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: "-",
    action: action_btns.ADD,
    class: "btn_operation",
  },
  {
    display: "🌞",
    action: action_btns.THEME,
    class: "",
  },
  {
    display: "0",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: ".",
    action: action_btns.ADD,
    class: "",
  },
  {
    display: "=",
    action: action_btns.CALC,
    class: "",
  },
];
export {
    action_btns,
    btns,
}