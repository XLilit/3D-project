import React, {useState} from 'react';
import './style.scss'
import logo from '../../assets/image/light/logo.png'
import lamp from '../../assets/image/light/lamp.png'
import light from '../../assets/image/light/light.png'
import icon from '../../assets/image/light/menu.png'

const Light = () => {
    const [active, setActive] = useState(false)
    const handleCLick = () => {
        setActive(!active)
        console.log(active)
    }
    return (
        <>
            <div className={active ? 'L-light-wrapper L-light-active-wrapper' : 'L-light-wrapper'} >
                <div className="G-container">
                    <nav className='L-light-navbar G-flex G-align-center G-justify-between G-flex-wrap'>
                        <div className="L-light-navbar-child G-flex G-align-center">
                            <p className='L-light-header-title'><a href='/'> &#10232; </a></p>
                            <div className="L-light-header-img" style={{backgroundImage: `url('${icon}')`}}/>
                            <div className="L-light-header-img" style={{backgroundImage: `url('${logo}')`}}/>
                        </div>
                        <div className="L-light-navbar-child G-flex G-align-center G-flex-wrap">
                            <ul className='L-light-header-list G-flex G-flex-wrap'>
                                <li className='L-light-link'>Latest</li>
                                <li className='L-light-link'>Modern</li>
                                <li className='L-light-link'>Contemporary</li>
                                <li className='L-light-link'>Affordable</li>
                            </ul>
                            <button className={active ? 'L-light-btn L-light-active-btn' : 'L-light-btn'}
                                    onClick={handleCLick}
                                    type='button'><span></span></button>
                        </div>
                    </nav>
                    <div className="L-lamp-container">
                        <div className='L-lamp-img L-light-absolute' style={{backgroundImage: `url('${lamp}')`}}/>
                        <div
                            className={active ? 'L-light-img L-on-light L-light-absolute' : 'L-light-img L-light-absolute'}
                            style={{backgroundImage: `url('${light}')`}}/>
                    </div>
                    <div className="L-lamp-text-container">
                        <h2>Latest in lighting</h2>
                        <p>
                            This is a first lamp from our company. we're making a huge collections of
                            modern lamps in a categories from home use to office use.
                        </p>
                        <button>Check all collections</button>
                        <div className="L-lamp-control">
                            <p>04</p>
                            <div className="L-lamp-line"><span></span></div>
                            <p>05</p>
                        </div>
                    </div>
                    <div className="L-paragraph-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto atque blanditiis
                        consectetur consequatur cumque debitis dolore est exercitationem incidunt ipsa iure iusto libero
                        modi molestiae, molestias nam natus nesciunt nulla, perspiciatis possimus quaerat quia quidem,
                        quisquam quos rerum saepe sequi sint totam voluptatum? A ad facere iusto nisi rerum soluta
                        suscipit
                        ullam? Amet architecto corporis cum dicta doloremque eum facilis, hic inventore iure magnam modi
                        necessitatibus numquam odio perferendis repudiandae similique voluptas. Cumque dolorem harum
                        maxime
                        qui quis! Aperiam consequatur deleniti harum itaque iusto, modi molestias nam officiis
                        perferendis,
                        qui quo soluta ullam velit. Beatae, consequatur doloribus dolorum eius et eveniet fugiat itaque
                        provident quam vitae! A adipisci, architecto atque commodi consectetur culpa debitis deserunt,
                        dignissimos dolore ducimus eaque earum excepturi expedita facere fugiat fugit harum impedit
                        incidunt
                        ipsam iure iusto laboriosam laborum mollitia natus necessitatibus nostrum obcaecati odio optio
                        pariatur perferendis placeat porro quae reiciendis soluta tempora vitae voluptatem! Animi atque,
                        beatae, consectetur fugiat laboriosam laborum, nemo odio odit optio perferendis quam quod
                        repudiandae ut. Ad aliquam corporis dignissimos eius eos excepturi expedita iusto necessitatibus
                        nemo neque, nisi odit, officia pariatur, possimus quibusdam rem repellat repellendus sapiente
                        sunt
                        vero? Asperiores, assumenda consectetur ea earum eius eligendi eveniet facere ipsam iste iure,
                        maiores maxime minus nam natus nulla officiis optio possimus quasi quos repellat repellendus
                        reprehenderit sequi unde veniam vero. Ad adipisci, amet debitis dolore ducimus et nam numquam
                        velit!
                        Assumenda, consequuntur ducimus, harum laboriosam minus modi molestias nobis quae quis repellat,
                        similique sit sunt temporibus unde voluptatum? Adipisci amet asperiores aut commodi consectetur
                        consequatur consequuntur culpa cum cupiditate deleniti doloremque esse est eveniet expedita
                        facere
                        facilis fuga impedit ipsum itaque laudantium magnam magni nisi odio officiis omnis, perspiciatis
                        possimus praesentium qui repellat sunt suscipit temporibus tenetur voluptatem! Asperiores dolor
                        dolorem dolores esse eum facere facilis iure laudantium magnam, maiores nesciunt nobis quae
                        quibusdam saepe soluta ullam velit! A dolorum in laborum molestiae nisi non optio quidem ratione
                        temporibus veritatis. Adipisci amet commodi culpa ea molestiae mollitia perspiciatis quam,
                        totam.
                        Accusantium placeat provident quaerat quidem rem similique! Alias, cumque facere incidunt
                        inventore
                        maxime officia placeat quam, quas qui recusandae repellendus rerum vero voluptatem. Consectetur
                        optio quas ut? Deserunt molestiae mollitia quae similique. Ad amet, commodi distinctio eligendi
                        expedita in praesentium quibusdam repellendus suscipit temporibus? Ad aliquam atque consequuntur
                        cum
                        delectus deleniti dolor, doloremque dolores explicabo fugit, illo iusto libero maxime
                        necessitatibus
                        nisi officiis pariatur repellat vel voluptatibus voluptatum! Iure?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, ea eaque nihil odit
                        pariatur quia? Consectetur doloribus eveniet magni maxime modi rem temporibus vitae. Ab ad
                        aliquid
                        beatae, cumque distinctio doloremque eaque enim, expedita fugit illo inventore libero, maxime
                        nam
                        pariatur reiciendis similique unde ut voluptates. Adipisci aperiam atque debitis delectus esse,
                        eveniet ipsum necessitatibus, nisi officiis quidem quisquam rem reprehenderit ut, vel vitae.
                        Architecto at autem cumque dignissimos doloremque minus molestiae nesciunt odit quibusdam vel?
                        Autem
                        illo, magnam magni possimus qui similique? Ab aliquid aspernatur cum cumque deserunt dolore
                        doloremque doloribus ea earum eveniet facere harum ipsa ipsam ipsum magnam maiores molestias nam
                        natus pariatur, placeat possimus, quas quidem, quisquam sint sit. Ab aperiam architecto
                        aspernatur
                        commodi cupiditate deleniti dolore dolorem error est ex ipsum, labore laborum, magni
                        necessitatibus
                        obcaecati officia officiis optio quae quibusdam recusandae reiciendis, repellendus sapiente
                        similique sint tempora temporibus ullam voluptatibus. Corporis debitis dolorem ducimus, illum
                        inventore ipsam laboriosam maxime necessitatibus nobis odio perspiciatis quod similique sunt
                        tempore
                        vitae? Alias, aliquid ipsam maiores nulla obcaecati quis, quisquam repellendus sapiente soluta
                        tempora unde, voluptatum. Ad alias cum esse facere hic ipsam necessitatibus optio, quia
                        reprehenderit, sed sint sunt suscipit vel vitae voluptatibus. Ad animi at cumque dicta ea eaque
                        earum excepturi facere laboriosam nobis repellendus saepe sapiente, velit. Alias amet,
                        asperiores
                        atque aut dolorem doloribus eligendi eveniet facere fugit hic iusto laudantium mollitia neque
                        nihil
                        numquam odio odit officiis omnis perspiciatis quam quia quibusdam quo saepe sed voluptas?
                        Aliquam
                        animi aperiam architecto aut blanditiis consequuntur debitis earum ex excepturi id incidunt iste
                        labore omnis praesentium provident quae quam recusandae reprehenderit repudiandae sequi, tenetur
                        totam, unde veritatis vero voluptatum! Architecto dignissimos et excepturi facere harum illo
                        impedit, incidunt inventore ipsam labore possimus praesentium provident quos repudiandae sequi
                        ullam
                        voluptates? Accusantium, consequuntur culpa, deserunt eligendi hic incidunt minima natus optio
                        quidem quisquam ratione reprehenderit soluta tempore velit voluptate! Et harum, id incidunt
                        laborum
                        molestiae nisi, nostrum perspiciatis quidem ratione rem rerum totam. Accusantium adipisci alias
                        amet
                        autem blanditiis commodi consequuntur cumque debitis delectus deserunt dolores dolorum ducimus
                        et
                        eum expedita explicabo fugit harum incidunt, magni minus neque nobis non nulla officia omnis
                        pariatur perferendis provident quas quibusdam recusandae rem sapiente sit temporibus vitae
                        voluptas,
                        voluptatem voluptatum. Aliquid aperiam asperiores, esse laboriosam magni rerum tempore ut vel
                        voluptatum? Beatae corporis debitis, dicta eaque eveniet id iste molestiae nam, quis, quod
                        sapiente
                        sed ut? Aspernatur autem commodi consequuntur dicta earum eligendi excepturi explicabo facere
                        illum
                        itaque molestias neque, nihil nobis nulla obcaecati odio possimus qui quibusdam quisquam ratione
                        similique totam ut voluptates? Ad aspernatur at consectetur, consequuntur cumque dolores est,
                        excepturi, hic id illo libero non nulla numquam pariatur quae quasi rem saepe sequi sit tempore
                        tenetur voluptates voluptatibus. Animi aut consequuntur corporis cum dolorum in non officia quo
                        repellendus vero. Aliquid cumque et libero magnam odio quasi quis sapiente temporibus totam
                        velit!
                        Aliquam blanditiis consectetur cum distinctio, dolore doloremque expedita itaque labore
                        molestias
                        neque numquam odit reprehenderit sed tempore voluptatum! Accusantium beatae culpa enim eos ex
                        laborum mollitia non quisquam? Aperiam fugiat fugit minus natus officia suscipit unde
                        voluptatibus.
                        Aut ea fuga in, ipsam natus officiis quae. Alias architecto consequuntur dicta enim magni nemo
                        non
                        nulla obcaecati omnis, quas reiciendis tempore tenetur voluptatibus! Autem corporis doloribus
                        ducimus error ex, fugiat incidunt, ipsa molestiae mollitia non pariatur quod quos similique
                        tempore
                        temporibus velit, voluptas? Expedita incidunt officia quae quas quos rerum tenetur voluptates.
                        Assumenda at deserunt doloremque doloribus eligendi expedita facilis incidunt iure laboriosam
                        magnam
                        magni nostrum numquam obcaecati provident quaerat quia, quidem quo sed. Accusamus dolor dolores
                        doloribus nemo. Ab animi, consectetur dolore libero quis repudiandae similique soluta?
                    </div>
                </div>
            </div>
        </>
    );
};

export default Light;
