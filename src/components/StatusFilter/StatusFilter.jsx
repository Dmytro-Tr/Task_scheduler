import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { setStatusFilter } from "../../redux/filtersSlice";

export const StatusFilter = () => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);
  // 4. Викликаємо фабрику екшену та передаємо значення фільтра
  // 5. Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === "all"}
        onClick={() => handleFilterChange("all")}
      >
        All
      </Button>
      <Button
        selected={filter === "active"}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      <Button
        selected={filter === "completed"}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </Button>
    </div>
  );
};
