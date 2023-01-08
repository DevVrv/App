function AlertSmal({title, message, type="info"}) {
    return (
        <div className="alert-smal" data-alert-type={type}>
            <div className="alert-smal__header">
                <h4 className="h4">{title}</h4>
                <button type="button" className="btn btn-exit"></button>
            </div>
            <div className="alert-smal__message">
                {message}
            </div>
        </div>
    );
}

export { AlertSmal };