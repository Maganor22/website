<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\UserRepository;

class AppController extends AbstractController
{
    #[Route('/', name: 'app_app')]
    public function index(UserRepository $userRepository): Response
    {
        return $this->render('app/index.html.twig', [
            'formateurs' => $userRepository->findAll(),
        ]);
    }
}
