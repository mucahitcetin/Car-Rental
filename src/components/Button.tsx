import { MouseEventHandler } from "react";

//butonun değerlerini ayrı ayrı tanımlıyoruz opsiyonel olanları ? ile tanımlıyoruz.
type Props = {
  title: string; //text değeri
  designs?: string; //extra stil kullanılacaksa
  type?: "submit" | "reset" | "button"; //butonun tipi
  disabled?: boolean;
  icon?: string; //icon değerini tanımlıyoruz
  handleClick?: MouseEventHandler<HTMLButtonElement>; //tıklanma fonksiyonu tanımlıyoruz
};

const Button = ({
  title,
  designs,
  disabled,
  type,
  icon,
  handleClick,
}: Props) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={type}
      className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white ${designs}`}
    >
      <span className="flex-1">{title}</span>

      {icon && <img className="w-6 h-6" src={icon} alt="" />}
    </button>
  );
};

export default Button;
