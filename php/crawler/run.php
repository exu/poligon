<?php
$url = 'http://www.teleadreson.pl/-wagrowiec%20woj%20wielkopolskie/';
$url = 'http://www.teleadreson.pl/-Oborniki%20k.%20Poznania/';
$city = 'oborniki';

require('phpQuery.php');

function sendPostRequest($url, $recordNumberFrom, $recordNumnberTo, $data=array())
{
    $fields = array(
        'searchtext' => 'wagrowiec',
        'polish' => 'yes',
        'database' => 'TADRES ADDR.',
        'menuitem' => 'searchname',
        'wojtext' => '30',
        'obrotrange_min' => '0',
        'obrotrange_max' => '1000000000',
        'rokrange_min' => '0',
        'rokrange_max' => '9999',
        'liczbarange_min' => '0',
        'liczbarange_max' => '1000000000',
        'listreportstat' => 'list',
        'listlimit' => '200',
        'vindexfirst' => '10579404',
        'recordnumberlast' => $recordNumnberTo,
        'vindex' => '10647901',
        'recordnumber' => $recordNumberFrom,
        'ansource' => 'wielkopolskie skoki pko-bp-sa-oddzial-skoki-0108d9b883',
        'currenthtmlpage' => 'ListPage',
        'searchtext' => 'wagrowiec woj wielkopolskie',
        'next' => 'next',
    );

    $fields = array_merge($fields, $data);


    $fields_string = '';
    foreach($fields as $key=>$value) { $fields_string .= $key.'='.urlencode($value).'&'; }
    rtrim($fields_string,'&');

    //open connection
    $ch = curl_init();

    //set the url, number of POST vars, POST data
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, count($fields));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE); 

    //execute post
    $result = curl_exec($ch);

    //close connection
    curl_close($ch);

    return $result;
}


function getUrls($content) 
{
    $urls = array();
    $doc = phpQuery::newDocument($content);

    $table = pq($doc->find('.lista'));
    foreach($table->find('tr') as $row) {
        $urls[] = trim(pq(pq($row)->find('a:first'))->attr('href'));
    }

    return $urls;

}





// $result = sendPostRequest($url, 201, 400);
// $urls = getUrls($result);
// echo '<pre>' . var_export($urls, 1) . '</pre>';
// die;


$data = $urls = array();
$from = 1;
$to = 20;
$add = 20;
$isLastPage = false;

$data = $urls = array();

if(1) {

    while(!$isLastPage) {
        $result = sendPostRequest($url, $from, $to, $data);
        $doc = phpQuery::newDocument($result);
        $isLastPage = pq($doc->find('input.s[value=»]'))->count() == 0;
        $serializedData = $doc->find('input[type=hidden]')->serializeArray();
        $data = array();
        foreach($serializedData as $d){
            $data[$d['name']] = $d['value'];
        }
        $urls = array_merge($urls, getUrls($result));
        $from += $add; $to += $add;
    }

} else {
    $urls = array('http://www.teleadreson.pl/blazejewski-mikolaj-ogrodnictwo-i-uprawa-pieczarek-1215399dc5.html');
}

$fp = fopen($city . '.out.csv', 'w');


$data = array();
foreach($urls as $url) {
    if(!$url) continue;
    $result = file_get_contents($url);
    $doc = phpQuery::newDocument($result);
    foreach($doc->find('.raport tr') as $tr) {
        $tr = pq($tr);
        $name = pq($tr->find('th'))->text();
        $value = strip_tags(pq($tr->find('td'))->html(), '<span><a>');

        if($name == 'Ulica, numer') {
            foreach(pq($tr->find('th span a')) as $mapLink) {
                $data['maps'][] = pq($mapLink)->attr('href');
            }

            pq($tr->find('td span'))->remove();
            $value = pq($tr->find('td'))->text();
        }

        $data[$name] = $value;
    }


    if(!isset($addhead)) {
        $headers = array_keys($data);
        $addhead = 1;
        fputcsv($fp, $headers);
    }


    fputcsv($fp, $data);

}




