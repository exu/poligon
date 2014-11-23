<?php
namespace {

    require 'vendor/autoload.php';

    use Symfony\Component\BrowserKit\Client;
    use Symfony\Component\BrowserKit\Response;

    class IpClient extends Client
    {
        public function get()
        {
            return $this->request('GET', "http://wtfismyip.com/json");
        }

        protected function doRequest($request)
        {
            $data = file_get_contents($request->getUri());

            return new Response($data);
        }
    }


    print_r((new IpClient)->get());

}
