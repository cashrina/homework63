const Contacts = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border-primary mb-3">
                        <div className="card-header bg-primary text-white">Контактная информация</div>
                        <div className="card-body">
                            <h5 className="card-title">Как связаться с нами</h5>
                            <p className="card-text">
                                <strong>Email:</strong> kakasi@thebest.com<br />
                                <strong>Телефон:</strong> +1 (123) 456-7890<br />
                                <strong>Адрес:</strong> Улица Какаши, дом Учиха 123, д.Скрытого Листа, Россия<br />
                                <strong>Telegram:</strong> @volchiShabash
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;