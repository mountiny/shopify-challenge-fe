import s from './Skeleton.module.css';

const Skeleton = ({rows = 10}) => {
  return (
    <div className={s.wrapper}>
      {
        [... new Array(rows)].map((row, key) => (
          <div key={key} className={s.skeleton} />
        ))
      }
     
    </div>
  );
};

export default Skeleton;
