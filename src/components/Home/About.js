import { useTheme } from "../../hooks/ThemeContext";

// Component to display the about page
const About = () => {
  const { language } = useTheme();

  const aboutTitleKey = language === "en" ? "About" : "À propos";

  return (
    <div id="about" className="page-content">
      <h1>{aboutTitleKey}</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
        praesentium optio dignissimos consectetur blanditiis similique esse
        perspiciatis aut cupiditate omnis corporis nesciunt! Iusto, dolor. Nemo
        voluptatem delectus molestiae incidunt accusamus! Incidunt unde saepe
        ullam laboriosam tempora enim dicta at a asperiores. Reiciendis
        molestias ipsum eveniet architecto reprehenderit recusandae ut hic error
        doloremque quo explicabo facere, fugiat magni qui atque ad natus ducimus
        dicta aperiam similique dolores aspernatur. Voluptates et recusandae
        aspernatur qui itaque sint natus culpa modi. Nemo corrupti quo
        voluptatibus repudiandae unde fuga aspernatur debitis dolor dignissimos
        tempora. Iure quidem nam ad dicta consequuntur culpa vel error, natus
        aspernatur consectetur ex maiores sit minima odio optio reiciendis iusto
        dolores numquam! Vel laborum repellendus nemo. Aut illo vero quo
        aspernatur error, in eligendi quia reiciendis sapiente sed autem sequi
        harum unde fugit vel nihil id adipisci dolor doloribus, nulla itaque
        dignissimos! Impedit hic vitae eligendi quia praesentium quibusdam
        tenetur quod laborum earum id. Repellendus incidunt molestiae assumenda
        delectus praesentium beatae iure porro voluptates, dicta voluptatibus
        iusto a ullam, voluptatum obcaecati voluptate quod. Possimus, iure, et
        quis excepturi voluptatibus ab, similique dolores reprehenderit sequi id
        libero. Repellat ullam odit ex? Voluptatibus animi praesentium neque eos
        beatae asperiores ipsum repellat repellendus commodi?
      </p>
    </div>
  );
};

export default About;
