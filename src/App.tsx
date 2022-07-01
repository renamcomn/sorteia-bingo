import { useContext } from "react";
import Button from "./components/Button";
import Header from "./components/Header";

import { BingoContext, } from './context/BingoContext';

function App() {
  const { sorterNumber, sorted, numbersSorted } = useContext(BingoContext);

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto">
        <Button title="Sortear" onClick={sorterNumber}/>
        <h1>Número sorteado: {sorted}</h1>
      </div>


<div className="max-w-2xl mx-auto">

	<div className="flex flex-col">
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                B
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                I
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                N
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                G
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                O
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(1) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white`}>1</td>
                          <td className={`${numbersSorted.includes(16) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>16</td>
                          <td className={`${numbersSorted.includes(31) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>31</td>
                          <td className={`${numbersSorted.includes(46) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>46</td>
                          <td className={`${numbersSorted.includes(61) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>61</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(2) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>2</td>
                          <td className={`${numbersSorted.includes(17) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>17</td>
                          <td className={`${numbersSorted.includes(32) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>32</td>
                          <td className={`${numbersSorted.includes(47) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>47</td>
                          <td className={`${numbersSorted.includes(62) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>62</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(3) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>3</td>
                          <td className={`${numbersSorted.includes(18) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>18</td>
                          <td className={`${numbersSorted.includes(33) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>33</td>
                          <td className={`${numbersSorted.includes(48) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>48</td>
                          <td className={`${numbersSorted.includes(63) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>63</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(4) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>4</td>
                          <td className={`${numbersSorted.includes(19) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>19</td>
                          <td className={`${numbersSorted.includes(34) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>34</td>
                          <td className={`${numbersSorted.includes(49) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>49</td>
                          <td className={`${numbersSorted.includes(64) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>64</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(5) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>5</td>
                          <td className={`${numbersSorted.includes(20) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>20</td>
                          <td className={`${numbersSorted.includes(35) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>35</td>
                          <td className={`${numbersSorted.includes(50) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>50</td>
                          <td className={`${numbersSorted.includes(65) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>65</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(6) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>6</td>
                          <td className={`${numbersSorted.includes(21) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>21</td>
                          <td className={`${numbersSorted.includes(36) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>36</td>
                          <td className={`${numbersSorted.includes(51) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>51</td>
                          <td className={`${numbersSorted.includes(66) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>66</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(7) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>7</td>
                          <td className={`${numbersSorted.includes(22) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>22</td>
                          <td className={`${numbersSorted.includes(37) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>37</td>
                          <td className={`${numbersSorted.includes(52) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>52</td>
                          <td className={`${numbersSorted.includes(67) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>67</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(8) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>8</td>
                          <td className={`${numbersSorted.includes(23) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>23</td>
                          <td className={`${numbersSorted.includes(38) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>38</td>
                          <td className={`${numbersSorted.includes(53) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>53</td>
                          <td className={`${numbersSorted.includes(68) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>68</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(9) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>9</td>
                          <td className={`${numbersSorted.includes(24) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>24</td>
                          <td className={`${numbersSorted.includes(39) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>39</td>
                          <td className={`${numbersSorted.includes(54) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>54</td>
                          <td className={`${numbersSorted.includes(69) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>69</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(10) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>10</td>
                          <td className={`${numbersSorted.includes(25) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>25</td>
                          <td className={`${numbersSorted.includes(40) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>40</td>
                          <td className={`${numbersSorted.includes(55) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>55</td>
                          <td className={`${numbersSorted.includes(70) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>70</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(11) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>11</td>
                          <td className={`${numbersSorted.includes(26) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>26</td>
                          <td className={`${numbersSorted.includes(41) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>41</td>
                          <td className={`${numbersSorted.includes(56) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>56</td>
                          <td className={`${numbersSorted.includes(71) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>71</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(12) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>12</td>
                          <td className={`${numbersSorted.includes(27) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>27</td>
                          <td className={`${numbersSorted.includes(42) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>42</td>
                          <td className={`${numbersSorted.includes(57) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>57</td>
                          <td className={`${numbersSorted.includes(72) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>72</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(13) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>13</td>
                          <td className={`${numbersSorted.includes(28) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>28</td>
                          <td className={`${numbersSorted.includes(43) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>43</td>
                          <td className={`${numbersSorted.includes(58) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>58</td>
                          <td className={`${numbersSorted.includes(73) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>73</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(14) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>14</td>
                          <td className={`${numbersSorted.includes(29) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>29</td>
                          <td className={`${numbersSorted.includes(44) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>44</td>
                          <td className={`${numbersSorted.includes(59) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>59</td>
                          <td className={`${numbersSorted.includes(74) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>74</td>
                        </tr>

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className={`${numbersSorted.includes(15) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>15</td>
                          <td className={`${numbersSorted.includes(30) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>30</td>
                          <td className={`${numbersSorted.includes(45) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>45</td>
                          <td className={`${numbersSorted.includes(60) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>60</td>
                          <td className={`${numbersSorted.includes(75) && 'bg-green-600' } py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white`}>75</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>


    </>

  )
}

export default App
