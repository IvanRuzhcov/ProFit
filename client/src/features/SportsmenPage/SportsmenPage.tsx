import React, { useEffect } from "react";

function SportsmenPage(): JSX.Element {
  useEffect(()=>{
    fetch()
  })

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
    </div>
  );
}

export default SportsmenPage;
