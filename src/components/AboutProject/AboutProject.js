import './AboutProject.css';
function AboutProject() {
  return (
    <div className='work' id='aboutProject'>
      <div className='work__container'>
        <h2 className='work__title'>О проекте</h2>
        <span className='work__line'></span>

        <div className='work__stages'>
          <div className='work__components'>
            <h3 className='work__subtitle'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='work__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className='work__components'>
            <h3 className='work__subtitle'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='work__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>

        <div className='work__deadline'>
          <div className='work__back'>
            <h4 className='work__week'>1 неделя</h4>
            <p className='work__subhead'>Back-end</p>
          </div>
          <div className='work__front'>
            <h4 className='work__weeks'>4 недели</h4>
            <p className='work__subhead'>Front-end</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
