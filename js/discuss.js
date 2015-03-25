/**
 * 
 * @Beile (metautf8@outlook.com)
 * @date    2015-03-10 22:56:27
 * @version $Id$
 */

$(document).ready(function(){
	var counter = 0;
	$(".innerNav a").click(function() {
		var counter = $(this).index();
		// console.log(counter);
		$(".cellNav").eq(counter).removeClass('hide').siblings().addClass('hide');
	});
});

