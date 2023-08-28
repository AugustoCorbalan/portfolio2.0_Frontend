import styles from './plot.module.css';
export const Plot = ()=>{
    return(
        <div className={styles.container}>
            <svg  className={styles.plot} version="1.1" id="svg2" 
	 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 5333.3 3200"
	>
{/* <style type="text/css">
	.st0{{fill:'none',stroke:'#1D1D1B',strokeWidth:2.6667,strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:1.1262}}
	
		.st1{{fill:'none',stroke:'#1D1D1B',strokeWidth:2.6667,strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:1.1211,strokeDasharray:'16.0028,16.0028'}}
	.st2{{fill:'none',stroke:'#1D1D1B',strokeWidth:2.6667,strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:1.0463}}
	
		.st3{{fill:'none',stroke:'#1D1D1B',strokeWidth:2.6667,strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:1.0446,strokeDasharray:'16.0028,16.0028'}}
	.st4{{fill:'none',stroke:'#1D1D1B',strokeWidth:2.6667,strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:1.0446}}
	.st5{{fill:'none',stroke:'#1D1D1B',strokeMiterlimit:10}}
	.st6{{fill:'none',stroke:'#1D1D1B',strokeWidth:5.3333,strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:3.0877}}
	.st7{{fill:'none',stroke:'#1D1D1B',strokeWidth:5.3333,strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:2.3878}} */}
	{/* .st8{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	
		.st9{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:15.5992,15.5992;}
	.st10{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.322;}
	.st11{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3.1912;}
	.st12{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.6148;}
	.st13{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.6464;}
	.st14{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.9264;}
	.st15{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	
		.st16{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:16.0028,16.0028;}
	.st17{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.8429;}
	.st18{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.3333;}
	
		.st19{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:16.0722,16.0722;}
	
		.st20{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:15.3361,15.3361;}
	.st21{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.154;}
	
		.st22{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:15.1963,15.1963;}
	.st23{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.3333;}
	.st24{fill:none;stroke:#1D1D1B;stroke-width:13.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.3333;}
	.st25{fill:none;stroke:#1D1D1B;stroke-width:6.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.3333;}
	.st26{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5595;}
	.st27{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5045;}
	
		.st28{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:16.2572,16.2572;}
	.st29{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5295;}
	.st30{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.7197;}
	.st31{fill:none;stroke:#1D1D1B;stroke-width:2.6667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.8573;}
	.st32{fill:none;stroke:#1D1D1B;stroke-width:5.3334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.7391;}
	.st33{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.4802;}
	.st34{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.9021;}
	.st35{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.3324;}
	.st36{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.3986;}
	.st37{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.8065;}
	.st38{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3.1075;}
	.st39{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.1674;}
	.st40{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.5165;}
	.st41{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.865;}
	.st42{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.3947;}
	.st43{fill:none;stroke:#1D1D1B;stroke-width:5.3333;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.3402;}
	.st44{fill:none;stroke:#1D1D1B;stroke-width:5.3334;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2.8718;}
	.st45{fill:none;stroke:#1D1D1B;stroke-width:1.9058;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.3333;} */}
{/* </style> */}
<g id="g10" transform="matrix(1.3333333,0,0,-1.3333333,0,3200)">
	<g id="g12" transform="scale(0.1)">
		<g id="g702" transform="scale(2.11156)">
			<path id="path704" class="st0" d="M14964.6,8124.1l-19.7-11.4"/>
		</g>
		<g id="g706" transform="scale(2.102)">
			<path id="path708" class="st1" d="M14973.2,8126.7l-852.8-492.5"/>
		</g>
		<g id="g710" transform="scale(1.96172)">
			<path id="path712" class="st2" d="M15108.8,8167.9l-21.3-12.3v-24.5"/>
		</g>
		<g id="g714" transform="scale(1.95854)">
			<path id="path716" class="st3" d="M15112,8095.1l0.1-1057"/>
		</g>
		<g id="g718" transform="scale(1.95854)">
			<path id="path720" class="st4" d="M15112.1,7013.6V6989"/>
		</g>
		<g id="g722" transform="scale(2.58979)">
			<path id="path724" class="st5" d="M14259.8,8934.4l-1560.4-918.6l0.1-746.3l646.3-373.1l1270.2,742.6"/>
		</g>
		<g id="g726" transform="scale(2.31577)">
			<path id="path728" class="st6" d="M14798.1,8617.5v732.2l-634.1,366.1l-634.1-366.1v-732.1"/>
		</g>
		<g id="g730" transform="scale(1.79088)">
			<path id="path732" class="st7" d="M15302.7,8815.5l-0.1,1070.9l-927.4,535.4"/>
		</g>
		<g id="g734" transform="scale(1.5508)">
			<path id="path736" class="st8" d="M15620.6,13314.3v-31l26.9-15.6"/>
		</g>
		<g id="g738" transform="scale(1.7031)">
			<path id="path740" class="st9" d="M14295.9,12053.8l1121.6-647.5"/>
		</g>
		<g id="g742" transform="scale(1.71258)">
			<path id="path744" class="st8" d="M15355.8,11329.4l24.3-14l24.4,14"/>
		</g>
		<g id="g746" transform="scale(1.86487)">
			<path id="path748" class="st9" d="M14190.1,10429.4l1024.3,591.4"/>
		</g>
		<g id="g750" transform="scale(1.87117)">
			<path id="path752" class="st8" d="M15184.9,10996.3l22.3,12.8v25.8"/>
		</g>
		<g id="g754" transform="scale(1.87117)">
			<path id="path756" class="st9" d="M15207.2,11085l-0.1,1178.7"/>
		</g>
		<g id="g758" transform="scale(1.57041)">
			<path id="path760" class="st9" d="M15425.5,14582.4V13178"/>
		</g>
		<g id="g762" transform="scale(1.74148)">
			<path id="path764" class="st10" d="M15365.9,10834.4l-0.1,1062l-919.7,530.9"/>
		</g>
		<g id="g766" transform="scale(2.39337)">
			<path id="path768" class="st11" d="M14742.2,5813.8l-1236.9,715.1"/>
		</g>
		<g id="g770" transform="scale(1.96113)">
			<path id="path772" class="st12" d="M13545.4,12095.4l0.1-903l782-451.4l781.9,451.5l-0.1,903"/>
		</g>
		<g id="g774" transform="scale(1.98477)">
			<path id="path776" class="st13" d="M13820.4,9864.4l632.5-365.1l632.4,365.2v730.2l-632.5,365.2l-632.4-365.2V9864.4z"/>
		</g>
		<g id="g778" transform="scale(2.19479)">
			<path id="path780" class="st14" d="M12858.6,7903.3l1017.2-587.2l1017.1,587.3l-0.1,1174.5l-1017.2,587.2l-1017.1-587.4
				L12858.6,7903.3z"/>
		</g>
		<g id="g782" transform="scale(1.05625)">
			<path id="path784" class="st15" d="M4986.6,15292.9l39.5,22.8"/>
		</g>
		<g id="g786" transform="scale(1.1391)">
			<path id="path788" class="st16" d="M4733.7,14244l1573.8,908.8"/>
		</g>
		<g id="g790" transform="scale(1.14646)">
			<path id="path792" class="st15" d="M6303.3,15076.5l36.4,21v42"/>
		</g>
		<g id="g794" transform="scale(1.31213)">
			<path id="path796" class="st16" d="M5539.2,13301.3l-0.1,1577.6"/>
		</g>
		<g id="g798" transform="scale(1.3195)">
			<path id="path800" class="st15" d="M5508.2,14832.4v36.5"/>
		</g>
		<g id="g802" transform="scale(1.38219)">
			<path id="path804" class="st17" d="M5270.5,14194.5l1027.2,593.1"/>
		</g>
		<path id="path806" class="st18" d="M3525.9,11376.1l1673.7,966.5l-0.1,1932.6l-1673.8,966.3L1852,14275"/>
		<path id="path808" class="st18" d="M3802.6,11525.3l1468.4-847.6l1468.3,847.8l-0.1,1695.6"/>
		<path id="path810" class="st18" d="M9616.4,10134.5l2115.4-1221.2l2115.3,1221.5l-0.1,2442.7l-2115.5,1221.2"/>
		<g id="g812" transform="scale(1.03815)">
			<path id="path814" class="st15" d="M10896.4,15354.7v-46.4"/>
		</g>
		<g id="g816" transform="scale(1.02708)">
			<path id="path818" class="st19" d="M11013.9,15379.3l0.1-3154.1"/>
		</g>
		<path id="path820" class="st15" d="M11312.2,12507.8v-48.1l41.7-24.1"/>
		<path id="path822" class="st20" d="M11433.8,12389.5l1398.5-807.3"/>
		<path id="path824" class="st15" d="M12872.3,11559.1l41.7-24.1"/>
		<g id="g826" transform="scale(1.61551)">
			<path id="path828" class="st21" d="M15544.4,2307l-1832.3,1059.4"/>
		</g>
		<path id="path830" class="st8" d="M5271.1,10152.9l-41.7-24.1"/>
		<path id="path832" class="st22" d="M5150.2,10083.1l-1385.6-800.1"/>
		<path id="path834" class="st22" d="M3804.3,7332.9l1385.7-800"/>
		<path id="path836" class="st8" d="M5229.6,6510.1l41.7-24.1l41.7,24.1"/>
		<path id="path838" class="st22" d="M5392.2,6555.9l1385.6,800.1"/>
		<path id="path840" class="st8" d="M6817.4,7378.8l41.7,24.1"/>
		<path id="path842" class="st18" d="M5625.8,7850.6l-950.2,548.6l-950.1-548.6l0.1-1097.2l950.2-548.6l950.2,548.7L5625.8,7850.6z"
			/>
		<path id="path844" class="st18" d="M6017,6045.7l-1337.7,772.2l-1337.6-772.4l0.1-1544.6l1337.7-772.2l1337.6,772.4L6017,6045.7z"
			/>
		<path id="path846" class="st18" d="M6590.1,2997.4l-1322.2,763.3l-1322.1-763.5l0.1-1526.7L5268,707.3l1322.1,763.4L6590.1,2997.4
			z"/>
		<path id="path848" class="st18" d="M7037.2,3367.2L8688,4320.4l-0.1,1906.3l-1650.9,953l-1650.8-953.2"/>
		<path id="path850" class="st18" d="M12161.1,10260.7l-3361.6,1940.6l-3361.4-1940.9l0.2-3881.5l3361.6-1940.6l3361.4,1940.9
			L12161.1,10260.7z"/>
		<path id="path852" class="st18" d="M11507.1,9456.4l-0.1,1770.8l-1533.6,885.3L8439.9,11227l0.1-1770.8"/>
		<path id="path854" class="st23" d="M9076,3076.2l-1458.5,842L6159,3076.1l0.1-1684.1l1458.5-842l1458.4,842.2L9076,3076.2z"/>
		<path id="path856" class="st24" d="M12702,6714.4L9722,4993.7l0.1-3441"/>
		<path id="path858" class="st18" d="M9386,11424.4l1255.2,724.7l0,1449.4"/>
		<path id="path860" class="st25" d="M15079.8,9235.4l-3348,1932.8L8384,9235l0.2-3865.8l3348-1932.8L15080,5369.5L15079.8,9235.4z"
			/>
		<path id="path862" class="st23" d="M13569.6,10823.3l2232.6-1288.8"/>
		<g id="g864" transform="scale(1.16965)">
			<path id="path866" class="st26" d="M16485.3,7697.7l-1908.7,1101.9"/>
		</g>
		<g id="g868" transform="scale(1.12834)">
			<path id="path870" class="st27" d="M6750.6,15172.6l-1978.5-1142.4l0.1-2284.6l1978.6-1142.2l1978.5,1142.4"/>
		</g>
		<path id="path872" class="st18" d="M14093.1,11303.9l-1708.5-986.6l0.2-1972.9l1708.6-986.3l1708.6,986.6"/>
		<path id="path874" class="st18" d="M8559.9,6581.5l0-1632l1413.4-815.9l1413.3,816l0,1632"/>
		<path id="path876" class="st8" d="M15157.6,6732.6v48.1l-41.7,24.1"/>
		<path id="path878" class="st28" d="M15031.2,6853.7l-4023.8,2322.9"/>
		<path id="path880" class="st8" d="M10965.1,9201.1l-41.7,24.1l-41.7-24.1"/>
		<path id="path882" class="st28" d="M10797,9152.2L6773.4,6828.9"/>
		<path id="path884" class="st8" d="M6731.1,6804.5l-41.7-24.1v-48.1"/>
		<path id="path886" class="st28" d="M6689.4,6634.5l0.2-4646.2"/>
		<path id="path888" class="st28" d="M15157.8,2037.5l-0.2,4646.1"/>
		<path id="path890" class="st18" d="M16517.9,4850.5l-2653,1531.5L11212,4850.3l0.2-3063.3l2653-1531.6L16518,1787.2
			L16517.9,4850.5z"/>
		<g id="g892" transform="scale(1.1471)">
			<path id="path894" class="st29" d="M14844.7,7446.1l-1707.4-985.9l0.2-1971.7l1707.4-985.7l1707.4,985.9"/>
		</g>
		<g id="g896" transform="scale(1.28979)">
			<path id="path898" class="st30" d="M12963.9,5788.8l0.1-1055.8l1601.9-924.8l1601.9,925l-0.2,1502.6"/>
		</g>
		<g id="g900" transform="scale(2.14301)">
			<path id="path902" class="st31" d="M13320.6,5400l1616.2,910.1V6651"/>
		</g>
		<g id="g904" transform="scale(1.30436)">
			<path id="path906" class="st32" d="M16133.2,4515.2l-823.6,475.5l-823.6-475.5l0.1-951.1l823.6-475.5l823.6,475.6L16133.2,4515.2
				z"/>
		</g>
		<g id="g908" transform="scale(1.11013)">
			<path id="path910" class="st33" d="M16668,2764.9l-1328.8,767.1l-1328.6-767.2l0.1-1534.3l1328.8-767l1328.6,767.1L16668,2764.9z
				"/>
		</g>
		<g id="g912" transform="scale(1.96969)">
			<path id="path914" class="st5" d="M14952.4,6968.1c0,40.9,33.1,74.1,74,74.1c41,0,74.1-33.2,74.1-74.1
				c0-40.9-33.1-74.1-74.1-74.1C14985.6,6894,14952.4,6927.2,14952.4,6968.1"/>
		</g>
		<g id="g916" transform="scale(1.67188)">
			<path id="path918" class="st5" d="M15335.5,11163.7c0,34.7,28.1,62.9,62.8,62.9c34.8,0,62.9-28.2,62.9-62.9s-28.1-62.8-62.9-62.8
				C15363.6,11100.8,15335.5,11128.9,15335.5,11163.7"/>
		</g>
		<g id="g920" transform="scale(2.40596)">
			<path id="path922" class="st5" d="M14596.7,5783.4c0,37.8,30.6,68.4,68.4,68.4s68.4-30.6,68.4-68.4c0-37.8-30.6-68.4-68.4-68.4
				S14596.7,5745.6,14596.7,5783.4"/>
		</g>
		<g id="g924" transform="scale(2.1169)">
			<path id="path926" class="st5" d="M14893.9,8103.6c0,18.2,14.8,33,33,33c18.2,0,33-14.8,33-33c0-18.2-14.8-33-33-33
				S14893.9,8085.4,14893.9,8103.6"/>
		</g>
		<g id="g928" transform="scale(1.62175)">
			<path id="path930" class="st5" d="M15490.2,13344.8c0,12.4,10,22.4,22.4,22.4s22.4-10,22.4-22.4s-10-22.4-22.4-22.4
				S15490.2,13332.5,15490.2,13344.8"/>
		</g>
		<g id="g932" transform="scale(2.09671)">
			<path id="path934" class="st5" d="M14909.1,9517.8c0,19,15.4,34.4,34.4,34.4s34.4-15.4,34.4-34.4s-15.4-34.4-34.4-34.4
				S14909.1,9498.8,14909.1,9517.8"/>
		</g>
		<g id="g936" transform="scale(2.32246)">
			<path id="path938" class="st5" d="M14730.9,8599.3c0,17.2,13.9,31.1,31,31.1s31.1-13.9,31.1-31.1s-14-31.1-31.1-31.1
				C14744.8,8568.2,14730.9,8582.1,14730.9,8599.3"/>
		</g>
		<g id="g940" transform="scale(1.79466)">
			<path id="path942" class="st5" d="M15242.9,8797c0,15.2,12.4,27.5,27.6,27.5c15.2,0,27.5-12.3,27.5-27.5
				c0-15.2-12.4-27.5-27.5-27.5C15255.3,8769.4,15242.9,8781.8,15242.9,8797"/>
		</g>
		<g id="g944" transform="scale(1.74536)">
			<path id="path946" class="st5" d="M15302.6,10802.3c0,16,13,29.1,29.1,29.1c16,0,29-13.1,29-29.1c0-16-13-29-29-29
				C15315.6,10773.3,15302.6,10786.3,15302.6,10802.3"/>
		</g>
		<g id="g948" transform="scale(2.17224)">
			<path id="path950" class="st5" d="M14848.6,7193.5c0,17.4,14.2,31.6,31.6,31.6c17.5,0,31.6-14.2,31.6-31.6s-14.1-31.6-31.6-31.6
				C14862.8,7161.9,14848.6,7176,14848.6,7193.5"/>
		</g>
		<path id="path952" class="st5" d="M11829.4,13798.6c0-53.9-43.7-97.5-97.5-97.5c-53.9,0-97.5,43.6-97.5,97.5
			c0,53.8,43.7,97.5,97.5,97.5C11785.7,13896.2,11829.4,13852.4,11829.4,13798.6"/>
		<g id="g954" transform="scale(1.38877)">
			<path id="path956" class="st5" d="M6310.3,14756c23.4-23.4,23.4-61.4,0-84.9c-23.4-23.4-61.4-23.4-84.8,0
				c-23.4,23.4-23.4,61.4,0,84.9C6248.9,14779.4,6286.8,14779.4,6310.3,14756"/>
		</g>
		<path id="path958" class="st5" d="M14188.9,11303.8c0-52.9-42.9-95.8-95.9-95.8c-52.9,0-95.8,42.9-95.8,95.9
			c0,52.9,42.9,95.8,95.8,95.8C14146,11399.7,14188.9,11356.7,14188.9,11303.8"/>
		<g id="g960" transform="scale(1.00406)">
			<path id="path962" class="st5" d="M17047.6,8506.9c0-48.7-39.4-88-88.1-88c-48.6,0-88,39.4-88,88s39.4,88,88,88
				C17008.2,8594.9,17047.6,8555.5,17047.6,8506.9"/>
		</g>
		<g id="g964" transform="scale(1.29577)">
			<path id="path966" class="st5" d="M16153.5,6207c0-33.4-27-60.4-60.4-60.4s-60.4,27.1-60.4,60.4c0,33.4,27,60.4,60.4,60.4
				S16153.5,6240.4,16153.5,6207"/>
		</g>
		<g id="g968" transform="scale(1.6281)">
			<path id="path970" class="st5" d="M15323.1,2289.2c0,55.8,45.2,101.1,101.2,101.1c55.8,0,101.1-45.3,101.1-101.1
				c0-55.8-45.2-101.1-101.1-101.1C15368.4,2188.1,15323.1,2233.3,15323.1,2289.2"/>
		</g>
		<g id="g972" transform="scale(1.17674)">
			<path id="path974" class="st5" d="M16464.8,7651.3c0-43.5-35.2-78.7-78.8-78.7c-43.5,0-78.8,35.2-78.8,78.7
				c0,43.5,35.3,78.8,78.8,78.8C16429.6,7730.1,16464.8,7694.8,16464.8,7651.3"/>
		</g>
		<path id="path976" class="st5" d="M5469.9,6226.6c0-46.3-37.5-83.8-83.8-83.8c-46.3,0-83.8,37.5-83.8,83.8s37.5,83.8,83.8,83.8
			C5432.4,6310.3,5469.9,6272.8,5469.9,6226.6"/>
		<path id="path978" class="st5" d="M9719.5,10152.9c0-65.7-53.3-119-119-119c-65.7,0-119,53.3-119,119c0,65.7,53.3,119,119,119
			C9666.2,10271.9,9719.5,10218.6,9719.5,10152.9"/>
		<path id="path980" class="st5" d="M9954.3,13253.2c0-57.8-46.8-104.5-104.5-104.5c-57.7,0-104.5,46.8-104.5,104.5
			c0,57.7,46.8,104.5,104.5,104.5C9907.5,13357.7,9954.3,13310.9,9954.3,13253.2"/>
		<g id="g982" transform="scale(1.13633)">
			<path id="path984" class="st5" d="M6795.3,15065.8c0-50.8-41.2-91.9-92-91.9c-50.8,0-92,41.2-92,91.9c0,50.9,41.2,92,92,92
				C6754.1,15157.8,6795.3,15116.7,6795.3,15065.8"/>
		</g>
		<path id="path986" class="st5" d="M8497.8,9456.2c0-31.9-25.9-57.8-57.8-57.8c-31.9,0-57.8,25.9-57.8,57.8
			c0,31.8,25.9,57.8,57.8,57.8C8471.9,9514,8497.8,9488.1,8497.8,9456.2"/>
		<path id="path988" class="st5" d="M8617.7,6581.6c0-31.9-25.9-57.8-57.8-57.8c-31.9,0-57.8,25.9-57.8,57.8
			c0,31.8,25.9,57.8,57.8,57.8C8591.8,6639.4,8617.7,6613.5,8617.7,6581.6"/>
		<path id="path990" class="st5" d="M11565.1,9456.4c0-32-26-58-58-58s-58,26-58,58c0,32,26,57.9,58,57.9
			S11565.1,9488.4,11565.1,9456.4"/>
		<path id="path992" class="st5" d="M12950.2,11535.1c0-20-16.2-36.3-36.3-36.3c-20.1,0-36.3,16.3-36.3,36.3
			c0,20.1,16.3,36.3,36.3,36.3C12934,11571.4,12950.2,11555.1,12950.2,11535.1"/>
		<path id="path994" class="st5" d="M9473.7,11424.4c0-48.5-39.3-87.8-87.7-87.8c-48.4,0-87.7,39.3-87.7,87.8
			c0,48.4,39.3,87.7,87.7,87.7C9434.5,11512.1,9473.7,11472.8,9473.7,11424.4"/>
		<path id="path996" class="st5" d="M6811.4,13221c0-39.9-32.3-72.2-72.2-72.2c-39.9,0-72.2,32.3-72.2,72.2
			c0,39.8,32.3,72.1,72.2,72.1C6779.1,13293.1,6811.4,13260.8,6811.4,13221"/>
		<g id="g998" transform="scale(1.04203)">
			<path id="path1000" class="st5" d="M10904.6,15297.5c0-26.9-21.8-48.7-48.7-48.7c-26.9,0-48.7,21.8-48.7,48.7
				s21.8,48.7,48.7,48.7C10882.7,15346.2,10904.6,15324.4,10904.6,15297.5"/>
		</g>
		<path id="path1002" class="st5" d="M15855.1,9534.5c0-29.3-23.7-52.9-53-52.9c-29.2,0-52.9,23.7-52.9,52.9c0,29.3,23.7,53,53,53
			C15831.3,9587.5,15855.1,9563.8,15855.1,9534.5"/>
		<path id="path1004" class="st5" d="M16769.6,7466.3c0-27-21.9-48.9-48.9-48.9c-27,0-48.9,21.9-48.9,48.9c0,27,21.9,48.9,48.9,48.9
			C16747.7,7515.2,16769.6,7493.3,16769.6,7466.3"/>
		<path id="path1006" class="st5" d="M11448.5,6581.5c0-34.1-27.7-61.9-61.9-61.9c-34.2,0-61.9,27.8-61.9,61.9
			c0,34.2,27.7,61.9,61.9,61.9C11420.8,6643.5,11448.5,6615.7,11448.5,6581.5"/>
		<path id="path1008" class="st5" d="M6971.6,7402.8c0-62.2-50.4-112.6-112.5-112.6s-112.5,50.4-112.5,112.6s50.4,112.6,112.5,112.6
			S6971.6,7465,6971.6,7402.8"/>
		<path id="path1010" class="st5" d="M5384.6,10152.9c0-62.7-50.8-113.5-113.5-113.5c-62.7,0-113.5,50.9-113.5,113.5
			c0,62.7,50.8,113.5,113.5,113.5C5333.8,10266.4,5384.6,10215.7,5384.6,10152.9"/>
		<g id="g1012" transform="scale(1.39437)">
			<path id="path1014" class="st5" d="M15837.5,3900.3c0,27.2,22.1,49.2,49.3,49.2c27.1,0,49.2-22,49.2-49.2
				c0-27.2-22.1-49.2-49.2-49.2C15859.5,3851,15837.5,3873.1,15837.5,3900.3"/>
		</g>
		<g id="g1016" transform="scale(1.15133)">
			<path id="path1018" class="st5" d="M16539.6,4472.3c0-26.5-21.5-48-48-48c-26.6,0-48.1,21.5-48.1,48c0,26.5,21.6,48.1,48.1,48.1
				C16518.1,4520.4,16539.6,4498.8,16539.6,4472.3"/>
		</g>
		<g id="g1020" transform="scale(1.88311)">
			<path id="path1022" class="st5" d="M15193.7,6145.3c0-19.1-15.5-34.5-34.6-34.5c-19,0-34.5,15.5-34.5,34.5
				c0,19,15.5,34.5,34.5,34.5C15178.2,6179.8,15193.7,6164.4,15193.7,6145.3"/>
		</g>
		<path id="path1024" class="st5" d="M12803.6,6714.4c0-56.2-45.5-101.6-101.6-101.6c-56.1,0-101.6,45.5-101.6,101.6
			c0,56.1,45.6,101.6,101.6,101.6C12758.1,6815.9,12803.6,6770.5,12803.6,6714.4"/>
		<path id="path1026" class="st5" d="M10721,13598.5c0-44-35.7-79.8-79.8-79.8s-79.8,35.8-79.8,79.8c0,44,35.7,79.8,79.8,79.8
			S10721,13642.6,10721,13598.5"/>
		<g id="g1028" transform="scale(1.06033)">
			<path id="path1030" class="st5" d="M5045,15231.8c0-41.6-33.7-75.2-75.3-75.2c-41.6,0-75.3,33.7-75.3,75.2s33.7,75.2,75.3,75.2
				C5011.3,15307,5045,15273.3,5045,15231.8"/>
		</g>
		<path id="path1032" class="st5" d="M14176.8,3887.5c0-48.2-39.1-87.4-87.4-87.4c-48.3,0-87.4,39.1-87.4,87.4
			c0,48.3,39.1,87.4,87.4,87.4C14137.6,3975,14176.8,3935.8,14176.8,3887.5"/>
		<path id="path1034" class="st5" d="M13637.1,10823.3c0-37.3-30.2-67.5-67.5-67.5c-37.3,0-67.5,30.2-67.5,67.6
			c0,37.3,30.2,67.5,67.5,67.5C13606.9,10890.9,13637.1,10860.6,13637.1,10823.3"/>
		<g id="g1036" transform="scale(1.00133)">
			<path id="path1038" class="st5" d="M17058.4,10278.8c0-17.4-14.1-31.5-31.4-31.5c-17.4,0-31.5,14.1-31.5,31.5
				s14.1,31.4,31.5,31.4C17044.3,10310.2,17058.4,10296.2,17058.4,10278.8"/>
		</g>
		<g id="g1040" transform="scale(2.14928)">
			<path id="path1042" class="st5" d="M14931.4,6631.7c0-21.1-17.1-38.1-38.2-38.1c-21,0-38.1,17.1-38.1,38.1s17.1,38.1,38.1,38.1
				C14914.4,6669.8,14931.4,6652.7,14931.4,6631.7"/>
		</g>
		<path id="path1044" class="st5" d="M15876.5,8344.7c0-41.2-33.5-74.6-74.6-74.6c-41.2,0-74.6,33.4-74.6,74.6
			c0,41.2,33.4,74.6,74.6,74.6C15843,8419.3,15876.5,8385.8,15876.5,8344.7"/>
		<path id="path1046" class="st5" d="M7136.3,3367.2c0-54.8-44.4-99.2-99.2-99.2c-54.8,0-99.2,44.4-99.2,99.2s44.4,99.2,99.2,99.2
			C7091.9,3466.4,7136.3,3422,7136.3,3367.2"/>
		<g id="g1048" transform="scale(2.1766)">
			<path id="path1050" class="st34" d="M14792.7,7179.1c0,31.9,25.8,57.7,57.7,57.7c31.8,0,57.8-25.8,57.8-57.7
				c0-31.9-25.9-57.7-57.8-57.7C14818.5,7121.3,14792.7,7147.2,14792.7,7179.1z"/>
		</g>
		<g id="g1052" transform="scale(1.74932)">
			<path id="path1054" class="st35" d="M15238.4,10777.8c0,32.4,26.2,58.6,58.6,58.6c32.4,0,58.6-26.2,58.6-58.6
				c0-32.3-26.2-58.6-58.6-58.6C15264.7,10719.2,15238.4,10745.5,15238.4,10777.8z"/>
		</g>
		<g id="g1056" transform="scale(1.79896)">
			<path id="path1058" class="st36" d="M15175.2,8775.9c0,32.4,26.3,58.8,58.8,58.8c32.4,0,58.7-26.3,58.7-58.8
				c0-32.5-26.3-58.8-58.7-58.8C15201.5,8717.2,15175.2,8743.5,15175.2,8775.9z"/>
		</g>
		<g id="g1060" transform="scale(2.10491)">
			<path id="path1062" class="st37" d="M14800,9480.7c0,47.1,38.3,85.2,85.3,85.2c47.1,0,85.3-38.1,85.3-85.2
				c0-47.1-38.2-85.3-85.3-85.3C14838.3,9395.5,14800,9433.6,14800,9480.7z"/>
		</g>
		<g id="g1064" transform="scale(2.33066)">
			<path id="path1066" class="st38" d="M14633,8569c0,42.5,34.5,77,77,77s77-34.5,77-77c0-42.5-34.5-77-77-77
				S14633,8526.5,14633,8569z"/>
		</g>
		<g id="g1068" transform="scale(1.62554)">
			<path id="path1070" class="st39" d="M15423.6,13313.7c0,29.1,23.7,52.8,52.8,52.8c29.1,0,52.8-23.7,52.8-52.8
				c0-29.2-23.7-52.8-52.8-52.8C15447.3,13261,15423.6,13284.5,15423.6,13313.7z"/>
		</g>
		<path id="path1072" class="st18" d="M15910.3,9534.5c0-59.7-48.5-108.1-108.2-108.1c-59.7,0-108.1,48.5-108.1,108.1
			c0,59.8,48.5,108.1,108.2,108.1C15861.8,9642.6,15910.3,9594.3,15910.3,9534.5z"/>
		<path id="path1074" class="st18" d="M11632.5,9456.4c0-69.2-56.1-125.4-125.4-125.4c-69.2,0-125.4,56.2-125.4,125.4
			s56.1,125.4,125.4,125.4C11576.4,9581.8,11632.5,9525.6,11632.5,9456.4z"/>
		<path id="path1076" class="st18" d="M11507.1,6581.5c0-66.5-53.9-120.4-120.5-120.4c-66.5,0-120.5,53.9-120.5,120.4
			c0,66.6,53.9,120.5,120.5,120.5C11453.2,6702,11507.1,6648.1,11507.1,6581.5z"/>
		<g id="g1078" transform="scale(1.88738)">
			<path id="path1080" class="st40" d="M15188.9,6131.4c0-35.4-28.7-64-64-64c-35.4,0-64,28.6-64,64c0,35.3,28.6,64,64,64
				C15160.2,6195.4,15188.9,6166.7,15188.9,6131.4z"/>
		</g>
		<g id="g1082" transform="scale(1.39874)">
			<path id="path1084" class="st41" d="M15747.3,3888.1c0,49.6,40.3,89.8,89.8,89.8c49.7,0,89.8-40.2,89.8-89.8
				c0-49.6-40.2-89.9-89.8-89.9C15787.5,3798.2,15747.3,3838.5,15747.3,3888.1z"/>
		</g>
		<g id="g1086" transform="scale(1.04599)">
			<path id="path1088" class="st42" d="M10912.8,15239.6c0-54.1-43.9-98-98-98c-54.1,0-98,43.9-98,98s43.9,98,98,98
				C10868.9,15337.6,10912.8,15293.7,10912.8,15239.6z"/>
		</g>
		<path id="path1090" class="st18" d="M7037,7402.8c0-98.3-79.7-178-178-178s-178,79.7-178,178c0,98.4,79.7,178,178,178
			C6957.4,7580.9,7037.1,7501.2,7037,7402.8L7037,7402.8z"/>
		<path id="path1092" class="st18" d="M6918.7,13221c0-99.2-80.3-179.5-179.4-179.5c-99.1,0-179.4,80.3-179.4,179.5
			c0,99.1,80.3,179.4,179.4,179.4C6838.3,13400.4,6918.7,13320.1,6918.7,13221z"/>
		<path id="path1094" class="st18" d="M8531.3,9456.2c0-50.5-40.9-91.5-91.4-91.5c-50.5,0-91.4,40.9-91.4,91.5
			c0,50.5,40.9,91.4,91.4,91.4S8531.4,9506.7,8531.3,9456.2z"/>
		<path id="path1096" class="st18" d="M12999.7,11535.1c0-47.3-38.3-85.8-85.8-85.8s-85.8,38.4-85.8,85.8
			c0,47.4,38.4,85.8,85.8,85.8C12961.4,11620.9,12999.7,11582.5,12999.7,11535.1z"/>
		<path id="path1098" class="st18" d="M16812,7466.3c0-50.4-40.8-91.2-91.3-91.2c-50.4,0-91.2,40.8-91.2,91.2
			c0,50.4,40.8,91.3,91.2,91.3C16771.1,7557.6,16812,7516.7,16812,7466.3z"/>
		<path id="path1100" class="st18" d="M9542.1,11424.4c0-86.2-69.9-156-156-156c-86.2,0-156,69.8-156,156c0,86.2,69.9,156,156,156
			C9472.2,11580.5,9542.1,11510.6,9542.1,11424.4z"/>
		<path id="path1102" class="st18" d="M14264.4,3887.5c0-96.6-78.3-175-175-175c-96.7,0-175,78.4-175,175c0,96.7,78.4,175,175,175
			C14186.1,4062.6,14264.4,3984.2,14264.4,3887.5z"/>
		<g id="g1104" transform="scale(1.00518)">
			<path id="path1106" class="st43" d="M17043.1,10239.4c0-45.1-36.6-81.6-81.6-81.6c-45,0-81.5,36.5-81.5,81.6
				c0,45,36.5,81.5,81.5,81.5S17043.1,10284.4,17043.1,10239.4z"/>
		</g>
		<g id="g1108" transform="scale(2.15388)">
			<path id="path1110" class="st44" d="M14927.5,6617.5c0-36.4-29.5-66-66-66c-36.4,0-65.9,29.5-65.9,66s29.5,66,65.9,66
				C14898,6683.5,14927.5,6653.9,14927.5,6617.5z"/>
		</g>
		<path id="path1112" class="st18" d="M15910.2,8344.7c0-59.8-48.5-108.4-108.3-108.4c-59.9,0-108.4,48.5-108.4,108.4
			s48.5,108.4,108.4,108.4C15861.7,8453,15910.2,8404.5,15910.2,8344.7z"/>
		<path id="path1114" class="st45" d="M7176.1,3367.2c0-76.8-62.2-139-139-139c-76.8,0-139,62.3-139,139
			c0,76.8,62.2,138.9,139,138.9C7113.9,3506.2,7176.1,3444,7176.1,3367.2z"/>
		<g id="g1128" transform="scale(1.46212)">
			<path id="path1130" class="st5" d="M15803.4,10165.7h-42.3v14h42.3V10165.7"/>
		</g>
	</g>
</g>
</svg>
        </div>
    )
}  