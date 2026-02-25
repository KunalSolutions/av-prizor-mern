const PersonalBrand = () => {

    const Details = [
        {
            Style: 'Fabric Shirt',
            imgUrl: '/Images/01.JPG' 
        },
        {
            Style: 'Yellow Shirt',
            imgUrl: '/Images/02.jpg' 
        },
        {
            Style: 'Printed White',
            imgUrl: '/Images/03.JPG' 
        },
        {
            Style: 'Silk Black',
            imgUrl: '/Images/04.jpg' 
        },
        {
            Style: 'Cotton Gresish',
            imgUrl: '/Images/05.jpg' 
        },
        {
            Style: 'Pink Denim',
            imgUrl: '/Images/06.jpg' 
        },
        
    ]

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
                <h3 className="text-3xl font-bold mb-6">
                    My Personal Brand 
                </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {Details.map((Detail,index) => (
                    <div key={index} className=" shadow rounded-lg p-4 flex flex-col hover:shadow-lg transition">
                        <img src={Detail.imgUrl} alt={Detail.Style} className="h-48 w-full object-contain mb-4" />
                    <div>
                    <h3 className="mt-2 mb-2 text-sm text-center font-normal bg-white text-gray-900 tracking-tight">{Detail.Style}</h3>
                    </div>
                </div>

                ))}
            </div>
        </div>
    )
}

export default PersonalBrand