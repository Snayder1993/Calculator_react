import React, {useState} from 'react'

function BotonesCalcu(){
    return(
        <div className="Botones">
            <table cellspacing="4" cellpadding="4" border="1"  border="1" bordercolor="#4B86FC">
                <tr>
                    <td>
                        <input type="text" size="11"></input>
                    </td>
                </tr>
                
                <td>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>/</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>*</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>.</td>
                        <td>0</td>
                        <td>=</td>
                        <td>+</td>
                    </tr>






                </td>
                               

            </table>
        </div>
    )
}
export default BotonesCalcu