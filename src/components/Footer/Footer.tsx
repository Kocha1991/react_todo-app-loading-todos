import React from 'react';
import { FilterTypes, TodoFilter } from '../TodoFilter';

import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[]
  onFilterType: (type: FilterTypes) => void
  onRemoveTodos: () => void
};

export const Footer: React.FC<Props> = ({
  todos,
  onFilterType,
  onRemoveTodos,
}) => {
  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {`${todos.length} items left`}
      </span>

      <TodoFilter onFilterType={onFilterType} />

      <button
        type="button"
        className="todoapp__clear-completed"
        onClick={onRemoveTodos}
      >
        Clear completed
      </button>
    </footer>
  );
};