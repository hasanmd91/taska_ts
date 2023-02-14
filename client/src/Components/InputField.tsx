import React, { useRef } from "react";
import "./styles.css";
import { task } from "../App";
import { useAppSelector } from "../rtk/app/hooks";

interface props {
  newTask: task;
  setNewTask: React.Dispatch<React.SetStateAction<task>>;
  handelSubmit: (e: React.FormEvent) => void;
  currenId: string;
}

const InputField: React.FC<props> = ({
  newTask,
  setNewTask,
  handelSubmit,
  currenId,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const editableTask = useAppSelector((state) =>
    currenId ? state.tasks.tasks.find((t) => t._id === currenId) : null
  );

  console.log(editableTask);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handelSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        value={newTask.title as string}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        ref={inputRef}
        className="input_box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
