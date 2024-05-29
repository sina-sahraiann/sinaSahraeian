import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = ({ locale, dict }: { locale?: string, dict: any }) => {
  return (
    <section dir={locale === 'fa' ? 'rtl' : 'ltr'} id="about">
      <BentoGrid className="w-full py-20 ">
        {dict.gridItems.map((item: any, i: any) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            locale={locale}
            dict={dict}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
