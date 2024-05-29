
const Card = ({ name, description, ingredients, web, address }) => {

  return (
    <div className="overflow-hidden shadow-lg w-52 justify-center m-5 items-center  rounded-2xl cursor-pointer">
      <img className="h-36 w-full" src='https://cdn.dribbble.com/userupload/9781333/file/original-020472ecdda18c6418862b973b0110de.jpg' alt="Mr-Burger" />
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{name}</div>
        {description!='N/A'&&<p className="text-gray-700 text-xs mb-2">{description}</p>}
      </div>
    </div>
  );
}

export default Card;
