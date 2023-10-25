import InfoBlock from "components/InfoBlock";

const Restaurant = () => {
  return (
    <>
      <InfoBlock
        title="Подготовка к обслуживанию клиентов ресторана"
        text="Цель подготовки зала ресторана к обслуживанию посетителей – создание в нем идеальной чистоты, уюта, четкой организации обслуживания. В процесс подготовки зала к обслуживанию входят:уборка помещения, расстановка столов,накрывание их скатертями, получение посуды и приборов, сервировка столов и личная подготовка официанта к работе. 
        Ежедневная уборка торгового зала включает проветривание помещения,влажную уборку полов, мебели, подоконников и т.п. Если в зале ковровые покры¬тия на полах, то для их уборки используют пылесосы и другое механической оборудование, облегчающее труд уборщиков."
        images={[
          "https://images.unsplash.com/photo-1512919586724-ae82d9fc1f19?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1595475038699-283c9aa41e09?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1557952138-db779780cd54?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      />
      <InfoBlock
        title="Общие правила сервировки"
        text="Сервировку стола проводят последовательно:накрытие стола скатертями; сервировка тарелками; сервировка приборами;сервировка стеклянной (хрустальной)посудой; раскладывание салфеток;расстановка приборов для специй, ваз с цветами. После подготовки зала ресторана к обслуживанию официанту отводится время для личной подготовки, т.е. официант должен проверить наличие всех необходимых ему принадлежностей. Одна из самых существенных принадлежностей официанта– ручник. Ручник должен быть гладким,белым или в клетку полотенцем размером35–80 см, чистым и хорошо проглаженным.Назначение этого полотенца – уберечь руки от обжигания при разноске горячих блюд, сохранить манжеты костюма от загрязнения. Ручником можно также полировать посуду. Ни в коем случае нельзя ручником сметать крошки со столов или использовать его как салфетку для вытирания рук."
        images={[
          "https://images.unsplash.com/photo-1511421616335-5a9846f1afcb?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1516554646385-7642248096d1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      />
      <InfoBlock
        title="Процесс обслуживания клиентов ресторана"
        text="Встреча посетителей ресторана начинается у входной двери, где их приветствует швейцар в униформе – ливрее, фуражке и белых перчатках. В вестибюле навстречу гостям выходят гардеробщики и, принимая от гостей верхнюю одежду, дают им фирменные номерки.
Затем посетители перед зеркалом могут привести себя в порядок. У входа в зал ресторана гостей встречает метрдотель,также приветствуя их, и провожает до свободного стола. Если по какой-либо причине метрдотель отсутствует, то эти функции выполняет бригадир официантов.Предлагая посетителям занять места за столом, следует иметь в виду, что женщина должна сесть с правой стороны от мужчины,а при обслуживании ей нужно подавать блюда в первую очередь."
        images={[
          "https://images.unsplash.com/photo-1511421616335-5a9846f1afcb?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
      />
    </>
  );
};

export default Restaurant;