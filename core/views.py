from django.http import HttpRequest, HttpResponse
from django.shortcuts import render


def login_page(request: HttpRequest) -> HttpResponse:
    context = {'error': ''}

    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '').strip()

        if not username or not password:
            context['error'] = "Login va parolni to'ldiring."
        else:
            context['error'] = 'Demo rejim: autentifikatsiya keyingi bosqichda ulanadi.'

    return render(request, 'core/login.html', context)
