import PropTypes from 'prop-types';
import s from './Filter.module.css';

export function Filter({ value, onChange }) {
  return (
    <form className={s.filter}>
      <label className={s.filterLabel}>
        <span className={s.filterTitle}>Filter</span>
        <input
          className={s.filterInput}
          type="text"
          onChange={onChange}
          value={value}
        />
      </label>
    </form>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
