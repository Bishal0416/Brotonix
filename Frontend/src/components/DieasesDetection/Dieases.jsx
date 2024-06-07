import React, { useState, useEffect } from 'react'
import Spin from './Spin'
import Markdown from 'react-markdown'



function Dieases() {

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [predictions, setPredictions] = useState(null);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);
    const [remedy, setRemedy] = useState(null);

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
        setPreview(URL.createObjectURL(event.target.files[0]));
    };

    const fetchData = async () => {
        setLoading(true);
        let formData = new FormData();
        formData.append('image', image);
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            body: formData,
        })
        const data = await response.json();
        setLoading(false);
        setPredictions(data.res.pred)
        setRemedy(data.res.remedy)
        // setProduct(JSON.parse(data.res.product))
        // console.log(JSON.parse(data.res.product))
        setProduct(JSON.parse(data.res.product))
        console.log(product)
    };

    const handleUpload = async (e) => {
        e.preventDefault()
        await fetchData()
    };

    return (
        <div className="my-24 p-10 ">
            <div className="flex">
                <label htmlFor="upload-button" className="cursor-pointer">
                    <span className="bg-red-500 hover:bg-red-700 text-white font-bold py-5 px-5 rounded mr-2">
                        <i className='fa-solid fa-upload'></i>
                        Upload File
                    </span>
                    <input type="file" id="upload-button" className="hidden" onChange={handleImageChange} />
                    <span>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mr-2" onClick={handleUpload}>Predict</button>
                    </span>
                    <div className="mt-10  max-w-full">
                        <img src={preview} className="max-w-full h-auto" />
                    </div>
                </label>

                {!loading ? (
                    <div className="output-container ml-20">
                        {predictions ? (<h2 className="text-5xl font-bold text-green-500 underline font-serif ml-10">
                            Prediction:
                        </h2>) : ""}
                        <div className="output-content text-2xl text-black-500 ml-4">
                            <pre>{predictions}</pre>
                        </div>
                        <Markdown>{remedy}</Markdown>

                        {product && product['shopping'] && product['shopping'].length > 0 && (
                            <div className="bg-white overflow-x-scroll ">
                                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recomended Products</h2>
                                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                        {product["shopping"].map((products) => ( 
                                            <div key={products.position} className="group relative">
                                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                    <img
                                                        src={products.imageUrl}
                                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                    />
                                                </div>
                                                <div className="mt-4 flex justify-between">
                                                    <div>
                                                        <h3 className="text-sm text-gray-700">
                                                            <a href={products.link}>
                                                                <span aria-hidden="true" className="absolute inset-0" />
                                                                {products.title}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}




                    </div>
                ) :
                    (
                        <div className="spinner ml-20"><Spin /></div>
                    )}


            </div>
        </div>
    )
}

export default Dieases
