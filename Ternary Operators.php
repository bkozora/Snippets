/* Snagged from http://davidwalsh.name/javascript-shorthand-if-else-examples */

/* Basic True / False Declaration */
$is_admin = ($user['permissions'] == 'admin' ? true : false);

/* Conditional Welcome Message */
echo 'Welcome '.($user['is_logged_in'] ? $user['first_name'] : 'Guest').'!';

/* Conditional Items Message */
echo 'Your cart contains '.$num_items.' item'.($num_items != 1 ? 's' : '').'.';

/* Conditional Error Reporting Level */
error_reporting($WEBSITE_IS_LIVE ? 0 : E_STRICT);

/* Conditional Basepath */
echo '<base href="http'.($PAGE_IS_SECURE ? 's' : '').'://mydomain.com" />';

/* Nested PHP Shorthand */
echo 'Your score is:  '.($score > 10 ? ($age > 10 ? 'Average' : 'Exceptional') : ($age > 10 ? 'Horrible' : 'Average') );

/* Leap Year Check */
$is_leap_year = ((($year % 4) == 0) && ((($year % 100) != 0) || (($year %400) == 0)));

/* Conditional PHP Redirect */
header('Location: '.($valid_login ? '/members/index.php' : 'login.php?errors=1')); exit();