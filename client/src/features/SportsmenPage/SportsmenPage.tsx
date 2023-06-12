import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ChartLine from './ChartLine';
import ChartBar from './ChartBar';

function SportsmenPage(): JSX.Element {
  const sportsmenState = useSelector((store: RootState) => store.auth.user);

  return (
    <div>
      <div>
        <img
          src="https://sun9-28.userapi.com/impg/SYZ2CF-J8sdkgqIU8A43nZ9okVkvzqcUZLV3MQ/AiyFfNv1RkM.jpg?size=403x604&quality=95&sign=b5bf4f0b4a807c2ff4f7e2430ae52a08&c_uniq_tag=Rkrsvel1skoxYVya9xzhF7i3K6cWaKoNJyI3XbSvk2g&type=album"
          alt=""
        />
      </div>
      <div>информация</div>
      <div>
        <button type="button">Редактирование данных</button>
      </div>
      <div>слайдер</div>
      <div>
        <ChartLine />
      </div>
      <div>
        <ChartBar />
      </div>
    </div>
  );
}

export default SportsmenPage;
