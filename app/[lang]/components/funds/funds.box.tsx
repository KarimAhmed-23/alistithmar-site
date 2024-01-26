import React, { FC } from 'react';
import Image from 'next/image';

interface FundsBoxProps {
  title: string;
  imageSrc: string;
  altText: string;
  details: { key: string; value: string }[];
}

const FundsBox: FC<FundsBoxProps> = ({ title, imageSrc, altText, details }) => {
  return (
    <div className="fund-box">
      <div className="box-img">
        <Image
          src={imageSrc}
          alt={altText}
          width={200}
          height={1000}
          className="img-fluid"
        />
      </div>
      <h6 className="box-title">{title}</h6>
      <ul className="box-list">
        {details.map((item, index) => (
          <li key={index}>
            <span className="key">{item.key}</span>
            <span className="val">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FundsBox;

{/* <div className="fund-box">
                      <div className="box-img">
												<Image
                            src="/img/funds/gallery-mall.png"
                            alt="gallery-mall"
                            width={200} height={1000} 
                            className="img-fluid"
                          />
                      </div>
                      <h6 className="box-title">جاليريا مول</h6>
                      <ul className="box-list">
                        <li>
                          <span className="key">نوع الملكية</span>
                          <span className="val">عقد منفعة</span>
                        </li>
                        <li>
                          <span className="key"> نوع الأصل العقاري </span>
                          <span className="val"> تجاري</span>
                        </li>
                        <li>
                          <span className="key"> المدينة</span>
                          <span className="val">الجبيل </span>
                        </li>
                        <li>
                          <span className="key"> مساحة الأرض</span>
                          <span className="val"> 21,572 م2 </span>
                        </li>
                      </ul>
                    </div> */}