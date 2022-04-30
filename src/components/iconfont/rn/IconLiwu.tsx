/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconLiwu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M209.212444 956.096a100.988444 100.988444 0 0 0-0.039111 0z m-1.827555-0.106667l1.422222 0.085334-1.436444-0.088889 0.014222 0.003555z m-1.418667-0.106666l1.038222 0.074666-1.038222-0.071111-0.113778-0.010666z m-6.417778-0.728889l0.714667 0.106666-0.711111-0.106666z m-4.824888-0.828445l0.608 0.117334-0.608-0.117334z m-4.643556-1.031111l0.618667 0.149334z m-3.015111-0.803555l0.568889 0.16-0.568889-0.16z m-3.029333-0.906667l0.341333 0.106667-0.341333-0.106667z m-3.047112-1.020444l0.700445 0.248888-0.700445-0.248888z m-1.447111-0.522667l0.668445 0.248889a98.823111 98.823111 0 0 1-0.668445-0.248889z m-1.358222-0.512l0.273778 0.106667z m-2.908444-1.180445l0.248889 0.106667-0.248889-0.106667z m-1.617778-0.704l0.718222 0.316445a98.986667 98.986667 0 0 1-0.718222-0.32z m-1.404445-0.64l0.796445 0.366223-0.796445-0.366223z m-1.411555-0.668444l0.782222 0.373333a99.057778 99.057778 0 0 1-0.782222-0.373333z m-1.361778-0.672l0.696889 0.348444-0.696889-0.348444z m-5.649778-3.072l1.052445 0.608a99.448889 99.448889 0 0 1-1.052445-0.608z m-1.230222-0.736l0.935111 0.561778a99.495111 99.495111 0 0 1-0.935111-0.558222z m-1.184-0.728889l0.664889 0.412445a99.530667 99.530667 0 0 1-0.664889-0.412445z m-1.230222-0.782222l0.391111 0.248889a99.566222 99.566222 0 0 1-0.391111-0.248889z m-1.368889-0.899556l0.540444 0.359111-0.540444-0.359111z m-1.28-0.871111l0.586667 0.401778-0.376889-0.256-0.206222-0.142222z m-0.167111-0.117333l0.170667 0.117333-0.170667-0.113778z m-2.346667-1.681778l0.636445 0.465778-0.636445-0.462222z m-2.492444-1.905778l0.714666 0.561778-0.465777-0.362667-0.248889-0.199111z m-0.216889-0.167111l0.213333 0.167111-0.213333-0.167111z m-1.066667-0.860444l0.810667 0.654222a100.064 100.064 0 0 1-0.810667-0.654222z m-2.449778-2.062222l0.362667 0.312888-0.362667-0.312888z m-1.742222-1.553778l0.465778 0.426666-0.465778-0.426666-0.476444-0.437334z m-1.344-1.248l0.16 0.149333-0.16-0.149333z m-1.091555-1.048889l0.305777 0.295111a100.277333 100.277333 0 0 1-0.305777-0.295111z m-9.763556-11.04l-0.152889-0.202667-0.405333-0.540444 0.558222 0.746666z m723.928889-408.647111l0.003556 305.066666-0.014223 1.646223c-0.867556 53.681778-44.227556 97.031111-97.909333 97.895111l-1.632 0.014222H159.943111l-2.172444-0.024889a99.456 99.456 0 0 1-27.054223-4.334222l-1.969777-0.625778-0.053334-0.088889a99.093333 99.093333 0 0 1-14.115555-51.128889v-348.416h744.206222zM130.723556 911.029333l0.188444 0.288-0.064-0.096-0.124444-0.192z m-0.202667-0.309333l0.199111 0.305778-0.135111-0.206222-0.064-0.099556z"
        fill={getIconColor(color, 0, '#C40000')}
      />
      <Path
        d="M912.977778 435.989333v420.672c0 54.983111-44.572444 99.555556-99.555556 99.555556H214.133333c-36.252444 0-67.978667-19.377778-85.386666-48.337778 9.813333 3.235556 20.302222 4.984889 31.196444 4.984889h599.288889c54.983111 0 99.555556-44.572444 99.555556-99.555556v-377.315555h54.190222z"
        fill={getIconColor(color, 1, '#9E0000')}
      />
      <Path
        d="M114.577778 435.989333h798.4v72.252445H114.577778z"
        fill={getIconColor(color, 2, '#9E0000')}
      />
      <Path
        d="M920.088889 428.878222v206.737778a7.111111 7.111111 0 1 1-14.222222 0v-192.515556H121.688889v413.560889c0 51.057778 41.386667 92.444444 92.444444 92.444445h599.288889c51.057778 0 92.444444-41.386667 92.444445-92.444445V722.808889a7.111111 7.111111 0 0 1 14.222222 0v133.852444c0 58.908444-47.754667 106.666667-106.666667 106.666667H214.133333c-58.912 0-106.666667-47.758222-106.666666-106.666667V428.878222h812.622222zM913.777778 686.222222a7.111111 7.111111 0 1 1 0 14.222222 7.111111 7.111111 0 0 1 0-14.222222z"
        fill={getIconColor(color, 3, '#4C3030')}
      />
      <Path
        d="M514.204444 297.607111l-0.949333 1.720889-1.056 1.895111 2.001778-3.616zM672.323556 71.111111c23.025778 0 44.408889 7.047111 62.115555 19.107556a110.481778 110.481778 0 0 1 19.068445 46.848c9.571556 60.419556-31.576889 117.148444-91.907556 126.702222-19.224889 3.047111-67.850667 13.393778-145.870222 31.047111l-1.006222 1.841778c22.24-40.568889 37.905778-78.826667 47.004444-114.780445C575.882667 125.930667 611.246222 71.111111 672.327111 71.111111z m-313.486223 0c61.084444 0 96.440889 54.819556 110.595556 110.766222 8.704 34.392889 23.416889 70.897778 44.145778 109.511111l1.852444 3.427556c-78.019556-17.653333-126.645333-28-145.870222-31.047111C309.233778 254.215111 268.088889 197.486222 277.653333 137.066667a110.449778 110.449778 0 0 1 19.072-46.840889A109.934222 109.934222 0 0 1 358.840889 71.111111z m424.064 109.084445l-0.010666-0.867556c0.017778 0.849778 0.028444 1.696 0.028444 2.549333l-0.017778-1.681777z m-0.142222-4.252445l0.024889 0.462222 0.007111 0.113778-0.035555-0.576z m-0.366222-4.942222l0.017778 0.199111-0.014223-0.103111z m-0.188445-1.788445l0.035556 0.298667-0.024889-0.149333z m-0.078222-0.664888l0.110222 0.967111-0.035555-0.302223 0.014222 0.149334z m-0.949333-6.353778l0.074667 0.426666-0.042667-0.231111-0.007111-0.039111-0.024889-0.156444z m-531.136-0.316445l-0.081778 0.462223 0.081778-0.462223z m530.762667-1.646222l0.042666 0.188445v0.007111l0.028445 0.152889 0.035555 0.163555-0.106666-0.512z m-530.115556-1.639111l-0.142222 0.675556 0.106666-0.497778 0.035556-0.177778z m1.070222-4.533333l-0.448 1.795555 0.288-1.166222 0.16-0.629333z m0.213334-0.8l-0.213334 0.8 0.106667-0.401778 0.106667-0.398222z m0.487111-1.784889l-0.490667 1.784889 0.049778-0.181334 0.440889-1.603555z m526.350222 0.394666l0.017778 0.060445 0.042666 0.156444-0.046222-0.16-0.014222-0.056889zM253.244444 148.871111l-0.490666 1.6 0.188444-0.632889 0.302222-0.967111z m525.098667 1.368889l0.024889 0.088889-0.014222-0.049778-0.010667-0.042667 0.024889 0.092445-0.014222-0.049778-0.010667-0.039111z m-524.721778-2.567111l-0.071111 0.216889 0.035556-0.106667 0.035555-0.110222z m0.860445-2.549333l-0.860445 2.549333 0.099556-0.309333 0.760889-2.24z m0.366222-1.020445l-0.366222 1.020445 0.071111-0.209778 0.295111-0.810667z m1.674667-4.334222l-0.487111 1.194667 0.216888-0.544 0.270223-0.650667z m0.586666-1.408l-0.586666 1.408 0.469333-1.137778 0.117333-0.270222z m514.435556-5.457778l0.565333 1.144889 0.113778 0.241778-0.675556-1.386667zM261.272889 129.671111l-0.615111 1.173333 0.469333-0.888888 0.145778-0.284445z m0.408889-0.757333l-0.408889 0.757333 0.216889-0.398222 0.192-0.359111z m0.892444-1.6l-0.817778 1.472 0.085334-0.16 0.732444-1.315556z m505.304889-1.244445l0.408889 0.711111-0.092444-0.16z m-0.64-1.080889l0.213333 0.355556-0.106666-0.177778-0.035556-0.060444z m0 0l0.071111 0.117334-0.117333-0.199111 0.049778 0.081777z m-1.799111-2.901333l0.067556 0.099556 0.056888 0.099555-0.124444-0.199111z m-0.835556-1.28h0.003556l0.017778 0.032-0.021334-0.032zM266.883556 120.32l-0.327112 0.487111 0.092445-0.135111 0.234667-0.352z m496.369777-1.511111l0.302223 0.433778 0.487111 0.718222-0.789334-1.152z m-495.534222 0.277333l-0.391111 0.568889 0.391111-0.568889z m494.737778-1.415111l0.551111 0.782222 0.181333 0.263111-0.732444-1.045333z m-493.777778 0.042667l-0.266667 0.380444 0.266667-0.380444z m1.052445-1.454222l-0.455112 0.622222 0.455112-0.622222z m491.025777-0.913778l0.195556 0.259555-0.113778-0.145777-0.081778-0.113778z m-488.039111-2.965334l-0.611555 0.760889 0.16-0.195555 0.451555-0.565334z m484.266667-1.770666l0.412444 0.483555 0.476445 0.579556-0.888889-1.063111z m-482.666667-0.170667l-1.024 1.233778 0.576-0.700445 0.448-0.533333z m481.884445-0.753778l0.433777 0.501334 0.348445 0.423111-0.782222-0.924445z m-481.265778 0.024889l-0.618667 0.728889 0.405334-0.476444 0.213333-0.252445z m0.874667-1.002666l-0.874667 1.002666 0.177778-0.206222 0.696889-0.796444z m479.690666 0.170666l0.241778 0.270222 0.455111 0.536889-0.696889-0.807111z m-1.219555-1.368889l1.091555 1.216 0.128 0.152889-1.219555-1.368889zM277.681778 106.631111l-1.418667 1.557333 0.124445-0.131555 1.294222-1.425778z m474.915555-0.945778l0.295111 0.309334 0.088889 0.092444-0.387555-0.401778z m-1.447111-1.504l0.064 0.064 0.711111 0.743111-0.775111-0.807111z m-470.698666-0.437333l0.188444-0.192 1.735111-1.699556a113.813333 113.813333 0 0 0-1.923555 1.891556z m1.656888-1.639111l-0.700444 0.686222 0.096-0.092444 0.604444-0.593778z m1.287112-1.219556l-0.416 0.391111z m1.304888-1.201777l-0.568888 0.519111 0.376888-0.344889 0.192-0.174222z m0.184889-0.167112l-0.184889 0.167112 0.184889-0.163556z m2.332445-2.040888l-0.604445 0.519111 0.604445-0.519111z m455.786666-0.8l0.234667 0.199111-0.124444-0.103111z m-0.561777-0.462223l0.796444 0.661334-0.238222-0.199111 0.113778 0.096z m-453.955556 0.195556l-0.558222 0.462222 0.558222-0.462222z m452.675556-1.230222l0.515555 0.412444 0.224 0.181333-0.739555-0.593777z m-0.807111-0.64l0.334222 0.263111-0.213334-0.167111-0.120888-0.096z m-449.237334-0.238223l-0.64 0.501334 0.32-0.248889 0.32-0.248889z m3.271111-2.446222l-0.334222 0.241778-1.102222 0.810667 1.084444-0.8 0.355556-0.252445z m443.697778 0.96l-0.248889-0.184889-0.174222-0.131555 0.202667 0.149333 0.220444 0.163556-0.227555-0.167111 0.227555 0.167111z m-3.221333-2.304l0.568889 0.391111z m-438.563556 0a110.862222 110.862222 0 0 0-0.497778 0.344889l0.497778-0.344889z m439.953778 0.974222l0.081778 0.056889-0.074667-0.056889 0.248889 0.177778 0.252444 0.184889-0.508444-0.362667z"
        fill={getIconColor(color, 4, '#009042')}
      />
      <Path
        d="M734.439111 90.218667c29.262222 19.928889 48.483556 53.546667 48.483556 91.658666 0 61.173333-49.514667 110.766222-110.595556 110.766223-19.84 0-71.04 2.716444-153.596444 8.149333l0.238222 0.430222-3.384889-0.220444-3.384889 0.220444 0.234667-0.426667c-82.552889-5.44-133.749333-8.152889-153.592889-8.152888-61.080889 0-110.595556-49.592889-110.595556-110.766223 0-38.115556 19.221333-71.729778 48.483556-91.662222a110.449778 110.449778 0 0 0-19.072 46.851556c-9.571556 60.419556 31.576889 117.148444 91.907555 126.702222 19.224889 3.047111 67.850667 13.393778 145.870223 31.047111l0.149333 0.270222 0.149333-0.270222c78.019556-17.653333 126.648889-28 145.870223-31.047111 60.330667-9.553778 101.475556-66.282667 91.911111-126.702222a110.449778 110.449778 0 0 0-19.075556-46.848z"
        fill={getIconColor(color, 5, '#056639')}
      />
      <Path
        d="M672.337778 64C737.351111 64 790.044444 116.778667 790.044444 181.877333c0 64.448-51.648 116.821333-115.758222 117.859556l-6.940444 0.064c-18.382222 0.309333-54.663111 2.161778-108.728889 5.550222l-36.739556 2.375111c-1.006222 0.451556-2.147556 0.675556-3.377777 0.593778l-2.865778-0.188444-2.951111 0.188444a7.068444 7.068444 0 0 1-3.416889-0.608c-68.366222-4.487111-114.844444-7.079111-139.285334-7.768889l-6.147555-0.142222-6.936889-0.064C292.782222 298.702222 241.134222 246.328889 241.134222 181.877333 241.137778 116.775111 293.831111 64 358.840889 64c22.069333 0 41.916444 6.684444 59.160889 19.278222a7.111111 7.111111 0 1 1-8.391111 11.484445C394.766222 83.918222 377.848889 78.222222 358.840889 78.222222 301.692444 78.222222 255.36 124.629333 255.36 181.877333s46.336 103.655111 103.484444 103.655111l3.573334 0.024889c18.243556 0.231111 55.338667 2.104889 111.406222 5.624889l32.711111 2.097778c-20.579556-38.563556-35.246222-75.111111-43.985778-109.660444l-0.732444-2.808889c-4.725333-17.742222-11.416889-34.375111-19.804445-48.760889a7.111111 7.111111 0 0 1 12.280889-7.164445c9.536 16.344889 16.974222 35.210667 22.044445 55.246223l0.810666 3.150222c8.010667 30.471111 20.821333 62.698667 38.442667 96.668444 17.628444-33.969778 30.435556-66.193778 38.449778-96.668444l1.344-5.212445C573.152 110.140444 614.4 64 672.337778 64z m0 14.222222c-49.169778 0-85.429333 39.473778-102.211556 99.783111l-1.002666 3.719111-1.351112 5.248c-8.828444 33.557333-23.207111 68.988444-43.121777 106.307556l32.711111-2.097778c51.687111-3.246222 87.249778-5.091556 106.780444-5.543111l4.622222-0.081778 5.287112-0.039111c56.359111-0.917333 101.770667-46.965333 101.770666-103.644444C775.822222 124.632889 729.493333 78.222222 672.337778 78.222222zM433.777778 99.555556a7.111111 7.111111 0 1 1 0 14.222222 7.111111 7.111111 0 0 1 0-14.222222z"
        fill={getIconColor(color, 6, '#4C3030')}
      />
      <Path
        d="M64 394.652444c0-54.983111 44.572444-99.555556 99.555556-99.555555h700.444444c16.807111 0 32.64 4.163556 46.524444 11.52a99.128889 99.128889 0 0 1 16.903112 55.52v55.790222H64v-23.274667z m899.541333-1.656888a100.124444 100.124444 0 0 0-1.304889-14.592l-0.252444-1.472c1.031111 5.749333 1.571556 11.672889 1.571556 17.720888z m-1.852444-17.628445l0.135111 0.696889c-0.348444-1.848889-0.746667-3.672889-1.198222-5.482667l-0.355556-1.383111c0.536889 2.033778 1.009778 4.088889 1.418667 6.168889z m-3.207111-12.181333l0.224 0.689778a98.801778 98.801778 0 0 0-0.224-0.689778z m-4.657778-11.52l0.248889 0.522666a99.136 99.136 0 0 0-0.248889-0.522666z m-2.097778-4.128l0.309334 0.586666a99.338667 99.338667 0 0 0-0.312889-0.586666z m-2.286222-4.017778l0.298667 0.504889a99.541333 99.541333 0 0 0-0.298667-0.501333z m-1.621333-2.606222l0.327111 0.512a99.694222 99.694222 0 0 0-0.327111-0.512z m-1.696-2.56l0.355555 0.533333c-0.138667-0.213333-0.280889-0.419556-0.426666-0.629333l0.426666 0.625778-0.355555-0.526223z m-1.777778-2.496l0.266667 0.362666a99.811556 99.811556 0 0 0-0.405334-0.558222l0.405334 0.558222-0.263112-0.362666z m-0.913778-1.230222l0.348445 0.462222-0.426667-0.565334 0.426667 0.565334a99.829333 99.829333 0 0 0-0.348445-0.462222z m-0.931555-1.212445l0.312888 0.401778a100 100 0 0 0-0.312888-0.401778z m-1.92-2.382222l0.241777 0.291555a100.010667 100.010667 0 0 0-0.380444-0.458666l0.380444 0.462222a100.220444 100.220444 0 0 0-0.241777-0.295111z m-0.988445-1.173333l0.049778 0.060444-0.184889-0.213333 0.184889 0.213333-0.049778-0.056889z m-1.006222-1.148445l0.416 0.469333a100.088889 100.088889 0 0 0-0.618667-0.700444l0.618667 0.700444a100.16 100.16 0 0 0-0.416-0.469333z m-6.382222-6.584889l0.309333 0.295111a100.167111 100.167111 0 0 0-0.547556-0.515555l0.547556 0.515555-0.309333-0.295111z m-1.123556-1.038222l0.504889 0.462222a100.042667 100.042667 0 0 0-0.732444-0.668444l0.732444 0.668444a100.184889 100.184889 0 0 0-0.504889-0.462222z m-1.137778-1.020444l0.508445 0.451555a100.096 100.096 0 0 0-0.508445-0.451555z m-2.321777-1.991112l0.380444 0.316445-0.540444-0.451556 0.540444 0.448-0.380444-0.316444z m-1.184-0.970666l0.416 0.334222a99.975111 99.975111 0 0 0-0.416-0.334222z m-3.640889-2.801778l0.309333 0.227556-0.508444-0.373334 0.508444 0.373334a100.024889 100.024889 0 0 0-0.309333-0.227556z m-1.244445-0.896l0.280889 0.199111a99.612444 99.612444 0 0 0-0.497778-0.355555l0.497778 0.355555a100.060444 100.060444 0 0 0-0.277333-0.199111z m-1.255111-0.878222l0.469333 0.327111a99.793778 99.793778 0 0 0-0.792888-0.547556l0.792888 0.544a99.911111 99.911111 0 0 0-0.469333-0.32z m-1.269333-0.856889l0.551111 0.369778a99.672889 99.672889 0 0 0-0.551111-0.369778z m-2.584889-1.660445l0.391111 0.245334a99.619556 99.619556 0 0 0-0.629333-0.391111l0.629333 0.391111a99.438222 99.438222 0 0 0-0.391111-0.245334z m-1.312-0.8l0.504889 0.305778a99.502222 99.502222 0 0 0-0.952889-0.568889l0.952889 0.568889a99.616 99.616 0 0 0-0.504889-0.305778z m-1.326222-0.782222l0.544 0.32a99.448889 99.448889 0 0 0-0.824889-0.48l0.824889 0.476445-0.544-0.316445z m-1.336889-0.760889l0.476444 0.270223a99.317333 99.317333 0 0 0-2.424889-1.326223l0.142223 0.071111c0.604444 0.323556 1.208889 0.650667 1.806222 0.984889z"
        fill={getIconColor(color, 7, '#C40000')}
      />
      <Path
        d="M963.555556 394.652444v55.786667H64v-32.515555l863.431111 0.003555v-55.786667a99.093333 99.093333 0 0 0-16.913778-55.527111C942.062222 323.306667 963.555556 356.472889 963.555556 394.652444z"
        fill={getIconColor(color, 8, '#9E0000')}
      />
      <Path
        d="M468.618667 298.709333h90.318222v120.888889h-90.318222z"
        fill={getIconColor(color, 9, '#009042')}
      />
      <Path
        d="M468.618667 417.927111h90.318222v32.515556h-90.318222z"
        fill={getIconColor(color, 10, '#056639')}
      />
      <Path
        d="M351.623111 457.553778a7.111111 7.111111 0 0 1 0-14.222222l109.884445-0.003556v-141.12H163.555556c-50.545778 0-91.616 40.565333-92.433778 90.915556l-0.010667 1.528888v48.675556h154.56a7.111111 7.111111 0 1 1 0 14.222222H64a7.111111 7.111111 0 0 1-7.111111-7.111111v-55.786667c0-58.912 47.754667-106.666667 106.666667-106.666666h700.444444c58.912 0 106.666667 47.754667 106.666667 106.666666v55.786667a7.111111 7.111111 0 0 1-7.111111 7.111111zM864 302.208h-297.955556v141.12H956.444444v-48.675556c0-51.057778-41.386667-92.444444-92.444444-92.444444z m-312.177778 3.612444h-76.088889v137.511112h76.088889V305.820444z"
        fill={getIconColor(color, 11, '#4C3030')}
      />
      <Path
        d="M558.933333 912.864h-90.311111l-0.003555-61.077333a162.574222 162.574222 0 0 0 46.965333 6.887111c15.015111 0 29.550222-2.033778 43.352889-5.845334v60.035556z m0-404.622222l0.003556 31.136a162.734222 162.734222 0 0 0-43.352889-5.845334c-16.330667 0-32.096 2.407111-46.968889 6.887112l0.003556-32.177778h90.318222z"
        fill={getIconColor(color, 12, '#009042')}
      />
      <Path
        d="M558.933333 912.864v43.352889h-90.311111v-43.352889h90.311111z m0-462.421333v57.802666h-90.311111v-57.802666h90.311111z"
        fill={getIconColor(color, 13, '#056639')}
      />
      <Path
        d="M515.584 533.532444c89.784889 0 162.570667 72.785778 162.570667 162.570667s-72.782222 162.570667-162.570667 162.570667c-89.784889 0-162.570667-72.782222-162.570667-162.570667 0-89.784889 72.785778-162.570667 162.570667-162.570667z m1.614222 36.241778l-0.533333 0.017778-0.544 0.064a7.111111 7.111111 0 0 0-6.033778 7.029333l-0.003555 39.953778-25.941334-25.941333-0.451555-0.416a7.111111 7.111111 0 0 0-9.603556 0.416l-0.416 0.451555a7.111111 7.111111 0 0 0 0.416 9.603556l35.996445 35.996444v46.624l-38.272-22.097777-0.113778-0.490667-14.784-55.175111-0.156445-0.508445a7.111111 7.111111 0 0 0-8.551111-4.519111l-0.508444 0.156445a7.111111 7.111111 0 0 0-4.519111 8.554666l11.235555 41.941334-36.721778-21.205334-0.494222-0.259555a7.111111 7.111111 0 0 0-9.219555 2.862222l-0.259556 0.490667a7.111111 7.111111 0 0 0 2.862222 9.223111l34.599111 19.978666-38.592 10.339556-0.508444 0.156444a7.111111 7.111111 0 0 0-4.519111 8.554667l0.156444 0.504889a7.111111 7.111111 0 0 0 8.551111 4.522667l52.327112-14.023111 40.376888 23.310222-38.268444 22.097778-0.483556-0.145778-55.175111-14.784-0.519111-0.120889a7.111111 7.111111 0 0 0-8.192 5.148444l-0.117333 0.515556a7.111111 7.111111 0 0 0 5.144889 8.192l41.941333 11.239111-36.721778 21.201778-0.472889 0.298666a7.111111 7.111111 0 0 0-2.133333 9.415112l0.298667 0.472888a7.111111 7.111111 0 0 0 9.418666 2.133334l34.599112-19.982222-10.339556 38.595555-0.117333 0.519111a7.111111 7.111111 0 0 0 5.144889 8.192l0.519111 0.117334a7.111111 7.111111 0 0 0 8.192-5.148445l14.019555-52.330667 40.373334-23.310222v44.195556c-0.124444 0.110222-0.248889 0.224-0.366223 0.341333l-40.391111 40.391111-0.416 0.455111a7.111111 7.111111 0 0 0 0.416 9.603556l0.451556 0.416a7.111111 7.111111 0 0 0 9.607111-0.416l30.698667-30.705778v42.407111l0.021333 0.533334a7.111111 7.111111 0 0 0 7.093333 6.577777l0.529778-0.017777a7.111111 7.111111 0 0 0 6.577778-7.093334v-39.957333l28.256 28.256 0.451555 0.416a7.111111 7.111111 0 0 0 9.603556-0.416l0.416-0.451556a7.111111 7.111111 0 0 0-0.416-9.603555l-38.311111-38.311111v-46.620445l36.384 21.013334 0.074666 0.298666c0.444444 1.660444 1.443556 3.025778 2.744889 3.950222l13.194667 49.223112 0.156444 0.508444a7.111111 7.111111 0 0 0 8.551112 4.522667l0.508444-0.156445a7.111111 7.111111 0 0 0 4.522667-8.554666l-10.343111-38.592 36.604444 21.130666 0.490667 0.259556a7.111111 7.111111 0 0 0 9.223111-2.862222l0.259555-0.490667a7.111111 7.111111 0 0 0-2.862222-9.223111l-34.606222-19.978667 35.441778-9.493333 0.508444-0.156445a7.111111 7.111111 0 0 0 4.519111-8.554666l-0.156444-0.504889a7.111111 7.111111 0 0 0-8.554667-4.522667l-49.176889 13.176889-40.373333-23.310222 36.391111-21.002667 0.295111 0.085333c1.664 0.448 3.345778 0.263111 4.8-0.401777l49.219556 13.187555 0.519111 0.117334a7.111111 7.111111 0 0 0 8.192-5.144889l0.117333-0.519111a7.111111 7.111111 0 0 0-5.144889-8.192l-38.595555-10.343112 36.604444-21.130666 0.469333-0.295111a7.111111 7.111111 0 0 0 2.133334-9.418667l-0.298667-0.469333a7.111111 7.111111 0 0 0-9.415111-2.133334l-34.606222 19.975111 9.500444-35.434666 0.117334-0.519111a7.111111 7.111111 0 0 0-5.148445-8.192l-0.515555-0.117334a7.111111 7.111111 0 0 0-8.192 5.148445l-13.180445 49.173333-40.373333 23.310222 0.003555-42.012444 0.227556-0.213333c1.216-1.219556 1.898667-2.766222 2.048-4.359112l36.032-36.035555 0.416-0.451556a7.111111 7.111111 0 0 0-0.416-9.603555l-0.451556-0.416a7.111111 7.111111 0 0 0-9.603555 0.416l-28.256 28.252444v-42.264889l-0.017778-0.533333a7.111111 7.111111 0 0 0-7.089778-6.577778z"
        fill={getIconColor(color, 14, '#009042')}
      />
      <Path
        d="M566.044444 443.331556l0.007112 90.723555c69.066667 21.486222 119.214222 85.909333 119.214222 162.048s-50.147556 140.565333-119.214222 162.051556l-0.003556 105.173333h-104.540444v-106.343111c-67.2-22.577778-115.605333-86.076444-115.605334-160.881778 0-74.805333 48.408889-138.304 115.605334-160.881778v-91.889777h104.540444z m-90.318222 417.745777l0.003556 88.028445h76.096V861.902222a170.321778 170.321778 0 0 1-36.241778 3.879111c-13.724444 0-27.075556-1.628444-39.857778-4.707555z m39.857778-320.433777c-85.856 0-155.459556 69.603556-155.459556 155.459555 0 85.859556 69.603556 155.459556 155.459556 155.459556 85.859556 0 155.459556-69.6 155.459556-155.459556 0-85.856-69.6-155.459556-155.459556-155.459555z m36.241778-83.093334h-76.096v73.578667a170.122667 170.122667 0 0 1 39.854222-4.707556c12.440889 0 24.565333 1.340444 36.241778 3.879111v-72.746666z"
        fill={getIconColor(color, 15, '#4C3030')}
      />
      <Path
        d="M516.664889 569.792l0.533333-0.017778a7.111111 7.111111 0 0 1 7.089778 6.577778l0.021333 0.533333-0.003555 42.264889 28.256-28.252444a7.111111 7.111111 0 0 1 9.6-0.416l0.455111 0.416a7.111111 7.111111 0 0 1 0.416 9.603555l-0.416 0.451556-36.032 36.035555a7.082667 7.082667 0 0 1-2.048 4.359112l-0.227556 0.213333-0.003555 42.012444 40.373333-23.310222 13.180445-49.173333a7.111111 7.111111 0 0 1 8.192-5.148445l0.515555 0.117334a7.111111 7.111111 0 0 1 5.148445 8.192l-0.117334 0.519111-9.500444 35.434666 34.606222-19.975111a7.111111 7.111111 0 0 1 9.415111 2.133334l0.298667 0.469333a7.111111 7.111111 0 0 1-2.133334 9.418667l-0.469333 0.295111-36.604444 21.130666 38.595555 10.343112a7.111111 7.111111 0 0 1 5.144889 8.192l-0.117333 0.519111a7.111111 7.111111 0 0 1-8.192 5.144889l-0.519111-0.117334-49.219556-13.187555a7.082667 7.082667 0 0 1-4.8 0.401777l-0.295111-0.085333-36.391111 21.002667 40.373333 23.310222 49.176889-13.176889a7.111111 7.111111 0 0 1 8.554667 4.522667l0.156444 0.504889a7.111111 7.111111 0 0 1-4.519111 8.554666l-0.508444 0.156445-35.441778 9.493333 34.606222 19.982222a7.111111 7.111111 0 0 1 2.862222 9.219556l-0.259555 0.490667a7.111111 7.111111 0 0 1-9.223111 2.862222l-0.490667-0.259556-36.604444-21.130666 10.343111 38.592a7.111111 7.111111 0 0 1-4.522667 8.554666l-0.508444 0.156445a7.111111 7.111111 0 0 1-8.551112-4.522667l-0.156444-0.508444-13.194667-49.223112a7.082667 7.082667 0 0 1-2.744889-3.950222l-0.071111-0.298666-36.387555-21.013334v46.620445l38.311111 38.311111a7.111111 7.111111 0 0 1 0.416 9.6l-0.416 0.455111a7.111111 7.111111 0 0 1-9.603556 0.416l-0.451555-0.416-28.256-28.256v39.957333a7.111111 7.111111 0 0 1-6.577778 7.093334l-0.533333 0.017777a7.111111 7.111111 0 0 1-7.089778-6.577777l-0.017778-0.533334-0.003555-42.407111-30.698667 30.705778a7.111111 7.111111 0 0 1-9.607111 0.416l-0.451556-0.416a7.111111 7.111111 0 0 1-0.416-9.603556l0.416-0.451555 40.391111-40.391111c0.120889-0.120889 0.241778-0.234667 0.366223-0.341334v-44.199111l-40.373334 23.310222-14.019555 52.330667a7.111111 7.111111 0 0 1-8.192 5.148445l-0.519111-0.117334a7.111111 7.111111 0 0 1-5.144889-8.192l0.117333-0.519111 10.339556-38.595555-34.599112 19.982222a7.111111 7.111111 0 0 1-9.422222-2.133334l-0.291555-0.472888a7.111111 7.111111 0 0 1 2.133333-9.415112l0.469333-0.298666 36.721778-21.201778-41.941333-11.235556a7.111111 7.111111 0 0 1-5.144889-8.195555l0.117333-0.515556a7.111111 7.111111 0 0 1 8.192-5.148444l0.519111 0.120889 55.175111 14.784 0.483556 0.145778 38.268444-22.097778-40.376888-23.310222-52.327112 14.023111a7.111111 7.111111 0 0 1-8.551111-4.522667l-0.156444-0.504889a7.111111 7.111111 0 0 1 4.519111-8.554667l0.508444-0.156444 38.592-10.339556-34.599111-19.978666a7.111111 7.111111 0 0 1-2.862222-9.223111l0.259556-0.490667a7.111111 7.111111 0 0 1 9.219555-2.862222l0.494222 0.259555 36.721778 21.205334-11.235555-41.941334a7.111111 7.111111 0 0 1 4.519111-8.554666l0.508444-0.156445a7.111111 7.111111 0 0 1 8.551111 4.519111l0.156445 0.508445 14.784 55.175111 0.113778 0.490667 38.272 22.097777v-46.624l-35.996445-35.996444a7.111111 7.111111 0 0 1-0.416-9.6l0.416-0.455111a7.111111 7.111111 0 0 1 9.603556-0.416l0.451555 0.416 25.941334 25.941333v-39.953778a7.111111 7.111111 0 0 1 6.581333-7.093333l0.533333-0.017778-0.533333 0.017778z"
        fill={getIconColor(color, 16, '#FFFFFF')}
      />
    </Svg>
  );
};

IconLiwu.defaultProps = {
  size: 18,
};

IconLiwu = React.memo ? React.memo(IconLiwu) : IconLiwu;

export default IconLiwu;